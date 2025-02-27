import axios from "axios";
import { supabaseClient } from "../../../services/supabaseClient";
import { LoginUser, NewUser } from "../exports/interfaces/exports";

export const signInWithProvider = async (provider: "google" | "twitter") => {
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: `${import.meta.env.VITE_ORIGIN_URI}/auth/callback`,
    },
  });
  if (error) console.log("Error signing in...", error);
  else console.log("User signed in!", data);
};

export const logInWithEmailPassword = async (userInfo: LoginUser) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: userInfo.email,
    password: userInfo.password,
  });
  if (error) console.log("Error signing in...", error);
  else {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URI}/auth/login`,
      {},
      {
        headers: {
          Authorization: `Bearer ${data.session?.access_token}`,
        },
      },
    );
    console.log("User signed in!", data, "Response from server : ", response);
    if (response.data.statusCode === 200) return true;
    else return false;
  }
};

export const registerWithNameEmailPassword = async (userInfo: NewUser) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email: userInfo.email,
    password: userInfo.password,
  });
  if (error) console.log("Error signing in...", error);
  else {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URI}/auth/register`,
      { name: userInfo.name },
      {
        headers: {
          Authorization: `Bearer ${data.session?.access_token}`,
        },
      },
    );
    console.log("User signed in!", data);
    if (response.data.statusCode === 201) return true;
    else return false;
  }
};
