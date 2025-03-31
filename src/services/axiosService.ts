
import axios, { AxiosError } from "axios";


export const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URI,
    withCredentials: true,
})

api.interceptors.response.use((response) => response, async (error : AxiosError) => {
    const originalRequest = error.config;
    if (error.response?.status === 401){
        console.log("ha aaya hu");
        
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URI}/auth/refresh-access-token`, {
            withCredentials: true
        });
        console.log(response);
        
        const newAccessToken = response.data.accessToken;
        if (newAccessToken) localStorage.setItem("auth_access_token", newAccessToken);
        if (newAccessToken) {
            originalRequest!.headers.Authorization = `Bearer ${newAccessToken}`;
            return api.request(originalRequest!);
        }

    }
    return Promise.reject(error);
})