import axios from "axios";
import { useUserStore } from "../../../stores/useUserStore";

export const useAuthService = () => {
  return { loginService, registerService, signInWithProviderService };
};

async function loginService(token: string) {
  try {
    const responseFromServer = await axios.post(
      `${import.meta.env.VITE_SERVER_URI}/api/auth/login`,
      token,
    );
    useUserStore.getState().updateUser(responseFromServer.data.data);
    return responseFromServer.data.data;
  } catch (error) {
    console.log("error is : ", error);
  }
}

async function registerService(token: string) {
  try {
    const responseFromServer = await axios.post(
      `${import.meta.env.VITE_SERVER_URI}/api/auth/register`,
      token,
    );
    useUserStore.getState().updateUser(responseFromServer.data.data);
    return responseFromServer.data.data;
  } catch (error) {
    return { error: error };
  }
}

async function signInWithProviderService(provider: string, token: string) {
  
  const responseFromServer = await axios.post(
    `${import.meta.env.VITE_SERVER_URI}/auth/signIn/${provider}`,
    {codeVerifier: localStorage.getItem("twitter_code_verifier")},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log(responseFromServer.data.data);
  
  useUserStore.getState().updateUser(responseFromServer.data.data);
  return responseFromServer.data.data;
}
