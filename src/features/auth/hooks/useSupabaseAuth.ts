import { supabaseClient } from "../../../services/supabaseClient";
import { LoginUser, NewUser } from "../exports/interfaces/exports";

export default function useSupabaseAuth() {
  return {
    signInWithProvider,
    logInWithEmailPassword,
    registerWithEmailPassword,
  };
}

const signInWithProvider = async (
  provider: "google" | "twitter",
): Promise<boolean> => {
  try {
    await supabaseClient.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${import.meta.env.VITE_ORIGIN_URI}/auth/callback?type=signin&provider=${encodeURIComponent(provider)}`,
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const logInWithEmailPassword = async (
  userInfo: LoginUser,
): Promise<boolean> => {
  const { error } = await supabaseClient.auth.signInWithPassword({
    email: userInfo.email,
    password: userInfo.password,
  });
  if (error) {
    console.log("Error signing in...", error);
    return false;
  }
  return true;
};

const registerWithEmailPassword = async (
  userInfo: NewUser,
): Promise<boolean> => {
  const { error } = await supabaseClient.auth.signUp({
    email: userInfo.email,
    password: userInfo.password,
  });
  if (error) {
    console.log("Error signing in...", error);
    return false;
  }
  return true;
};
