import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URI,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;
    console.log(error.response);
    if (
      error.response?.status === 401 &&
      error.response.statusText !== "Unauthorized exception from oauth"
    ) {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URI}/auth/refresh-access-token`,
        {
          withCredentials: true,
        },
      );

      const newAccessToken = response.data.accessToken;
      if (newAccessToken) {
        localStorage.setItem("auth_access_token", newAccessToken);
        originalRequest!.headers.Authorization = `Bearer ${newAccessToken}`;
        return api.request(originalRequest!);
      }
    }
    return Promise.reject(error);
  },
);
