import { useUserStore } from "../../../stores/useUserStore";
import { api } from "../../../services/axiosService";


export default function useUserService () {
    return { fetchUserData };
}

async function fetchUserData (username: string) {
    const response = await api.get(
      `${import.meta.env.VITE_SERVER_URI}/user/fetch-data/${username}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_access_token")}`,
        },
        withCredentials: true
      }
    );
    console.log(response);
    
    localStorage.setItem("username", response.data.data.username);  
    useUserStore.getState().updateUser(response.data.data);
}