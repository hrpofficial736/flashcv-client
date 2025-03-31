import { useUserStore } from "../../../stores/useUserStore";
import { LoginUser } from "../interfaces/loginUserInterface";
import { NewUser } from "../interfaces/newUserInterface";
import { api } from "../../../services/axiosService";

export const useAuthService = () => {
  return { loginService, registerService, signInWithProviderService };
};

async function loginService(userInfo: LoginUser) {
  try {
    const responseFromServer = await api.post(
      `${import.meta.env.VITE_SERVER_URI}/auth/login`,
      userInfo,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("auth_access_token")}`
        }
      }
    );
    localStorage.setItem("username", responseFromServer.data.data.username);
    useUserStore.getState().updateUser(responseFromServer.data.data);
    return true;
  } catch (error) {
    console.log("error is : ", error);
  }
}

async function registerService(userInfo: NewUser) {
  try {
    const responseFromServer = await api.post(
      `${import.meta.env.VITE_SERVER_URI}/auth/register`,
      userInfo,
    );
    console.log(responseFromServer);
    localStorage.setItem("username", responseFromServer.data.data.username);
    useUserStore.getState().updateUser(responseFromServer.data.data);
    localStorage.setItem("auth_access_token", responseFromServer.data.data.accessToken);
    return true;
  } catch (error) {
    return { error: error };
  }
}

async function signInWithProviderService(provider: string, token: string) {
  
  const responseFromServer = await api.post(
    `${import.meta.env.VITE_SERVER_URI}/auth/signIn/${provider}`,
    {codeVerifier: localStorage.getItem("twitter_code_verifier")},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log(responseFromServer.data.data);
  localStorage.setItem("username", responseFromServer.data.data.username);
  useUserStore.getState().updateUser(responseFromServer.data.data);
  return responseFromServer.data.data;
}
