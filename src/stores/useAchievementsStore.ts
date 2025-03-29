import { create } from "zustand";
import { AchievementsInterface } from "../features/resume-creation/interfaces/achievementsInterface";

interface AchievementsStore {
  achievements: AchievementsInterface[];
  addAchievements: (achievements: AchievementsInterface[]) => void;
}

export const useAchievementsStore = create<AchievementsStore>((set) => ({
  achievements: [],
  addAchievements: (newAchievements) => {
    console.log("before setting in store : ", newAchievements);
    set((state) => {
      const mergedAchievements = [...state.achievements, ...newAchievements];

      const uniqueAchievements = Array.from(
        new Map(mergedAchievements.map((ach) => [ach.id, ach])).values()   
      );

      console.log("Updated store with unique values:", uniqueAchievements);

      return { achievements: uniqueAchievements };
    }) 
  },
}));
