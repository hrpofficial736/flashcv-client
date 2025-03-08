import axios from "axios";

export const useAuthService = () => {
  return { loginService, registerService, signInWithProviderService };
};

async function loginService(token: string) {
  try {
    const responseFromServer = await axios.post(
      `${import.meta.env.VITE_SERVER_URI}/api/auth/login`,
      token,
    );
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

    return responseFromServer.data.data;
  } catch (error) {
    return { error: error };
  }
}

async function signInWithProviderService(provider: string, token: string) {
  const responseFromServer = await axios.post(
    `${import.meta.env.VITE_SERVER_URI}/auth/signIn/${provider}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return responseFromServer.data.data;
}
