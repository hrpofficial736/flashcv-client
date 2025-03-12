import { create } from "zustand";
import { AchievementsInterface } from "../features/resume-creation/interfaces/achievementsInterface";
import { v4 as uuidv4 } from "uuid";

interface AchievementsStore {
  achievements: AchievementsInterface[];
  addAchievement: (achievement: Omit<AchievementsInterface, "id">) => void;
  updateAchievement: (
    id: string,
    achievement: Partial<AchievementsInterface>
  ) => void;
  removeAchievement: (id: string) => void;
}

export const useAchievementsStore = create<AchievementsStore>((set) => ({
  achievements: [],
  addAchievement: (achievement) =>
    set((state) => ({
      achievements: [...state.achievements, { ...achievement, id: uuidv4() }],
    })),
  updateAchievement: (id, updatedAchievement) =>
    set((state) => ({
      achievements: state.achievements.map((achievement) =>
        achievement.id === id
          ? { ...achievement, ...updatedAchievement }
          : achievement
      ),
    })),
  removeAchievement: (id) =>
    set((state) => ({
      achievements: state.achievements.filter(
        (achievement) => achievement.id !== id
      ),
    })),
}));
