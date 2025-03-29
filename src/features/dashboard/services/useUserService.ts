import axios from "axios";
import { useUserStore } from "../../../stores/useUserStore";


export default function useUserService () {
    return { fetchUserData };
}

async function fetchUserData (username: string) {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URI}/user/fetch-data/${username}`);  
    useUserStore.getState().updateUser(response.data.data);
}