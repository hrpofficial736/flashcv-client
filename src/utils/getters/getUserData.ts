import { useUserStore } from "../../stores/useUserStore";
import { GlobalUser } from "../interfaces/globalUserInterface";

export default function getUserData(): boolean {
  const userState = useUserStore.getState();
  const userData: GlobalUser = {
    name: userState.name,
    email: userState.email,
    username: userState.username,
  };
  console.log(userData);
  if (!userData.name || !userData.email || !userData.username) return false;
  return true;
}
