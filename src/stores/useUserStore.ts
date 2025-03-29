import { create } from "zustand";
import {
  GlobalUser,
  GlobalUserActions,
} from "../utils/interfaces/globalUserInterface";

export const useUserStore = create<GlobalUser & GlobalUserActions>((set) => ({
  name: "",
  email: "",
  username: "",
  resumeCount: 0,
  resumes: [],
  updateUser: (newInfo) =>
    set((state) => {
      const mergedResumes = [...state.resumes!, ...newInfo.resumes!];
      const updatedResumes = Array.from(
        new Map(mergedResumes.map((resume) => [resume.title, resume])).values()
      );
      return {
        name: newInfo.name,
        email: newInfo.email,
        username: newInfo.username,
        imageUrl: newInfo.imageUrl,
        resumeCount: updatedResumes.length,
        resumes: updatedResumes,
      };
    }),
}));
