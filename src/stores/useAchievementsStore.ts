import { create } from "zustand";
import { AchievementsInterface } from "../features/resume-creation/interfaces/achievementsInterface";

interface AchievementsStore {
  achievements: AchievementsInterface[];
  addAchievements: (achievements: AchievementsInterface[]) => void;
}

export const useAchievementsStore = create<AchievementsStore>((set) => ({
  achievements: [],
  addAchievements: (achievements) =>
    set((state) => ({
      achievements: [...state.achievements, ...achievements],
    })),
  
}));
