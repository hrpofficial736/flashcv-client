import { create } from "zustand";
import {
  GlobalUser,
  GlobalUserActions,
} from "../utils/interfaces/globalUserInterface";

export const useUserStore = create<GlobalUser & GlobalUserActions>((set) => ({
  name: "",
  email: "",
  avatarUrl: "",
  username: "",
  resumeCount: 0,

  updateUser: (
    name: string,
    email: string,
    username: string,
    avatarUrl?: string,
    resumeCount?: number,
  ) =>
    set(() => ({
      name: name,
      email: email,
      avatarUrl: avatarUrl,
      username: username,
      resumeCount: resumeCount,
    })),
}));
