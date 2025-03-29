import { useUserStore } from "../../stores/useUserStore";
import { GlobalUser } from "../interfaces/globalUserInterface";

export default async function setUserData(user: GlobalUser) {
  console.log("in setter : ", user);
  useUserStore.getState().updateUser(user.name, user.email, user.username);
  console.log(
    "after setting : ",
    useUserStore.getState().name,
    useUserStore.getState().email,
    useUserStore.getState().username,
  );
}
