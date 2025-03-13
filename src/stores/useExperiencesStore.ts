import { create } from "zustand";
import { ExperienceInfoInterface } from "../features/resume-creation/interfaces/experienceInfoInterface";

interface ExperiencesStore {
  experiences: ExperienceInfoInterface[];
  addExperiences: (experiences: ExperienceInfoInterface[]) => void;
}

export const useExperiencesStore = create<ExperiencesStore>((set) => ({
  experiences: [],
  addExperiences: (experiences) =>
    set((state) => ({
      experiences: [...state.experiences, ...experiences],
    })),
}));
