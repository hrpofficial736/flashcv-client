import { create } from "zustand";
import { SkillInterface } from "../features/resume-creation/interfaces/skillsInterface";

interface SkillsStore {
  skills: SkillInterface[];
  addSkills: (skills: SkillInterface[]) => void;
}

export const useSkillsStore = create<SkillsStore>((set) => ({
  skills: [],
  addSkills: (skills) =>
    set((state) => ({
      skills: [...state.skills, ...skills],
    })),
  
}));
