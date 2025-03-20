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
  resumes: [],
  updateUser: (
    resumes?: string[]
  ) =>
    set(() => ({
      resumes: resumes
    })),
}));
