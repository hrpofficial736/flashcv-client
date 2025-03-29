import { create } from "zustand";
import { ExperienceInfoInterface } from "../features/resume-creation/interfaces/experienceInfoInterface";

interface ExperiencesStore {
  experiences: ExperienceInfoInterface[];
  addExperiences: (experiences: ExperienceInfoInterface[]) => void;
}

export const useExperiencesStore = create<ExperiencesStore>((set) => ({
  experiences: [],
  addExperiences: (newExperiences) =>
    set((state) => {
      const mergedExperiences: ExperienceInfoInterface[] = [
        ...state.experiences,
        ...newExperiences,
      ];

      const updatedExperiences: ExperienceInfoInterface[] = Array.from(
        new Map(mergedExperiences.map((exp) => [exp.id, exp])).values()
      );

      return { experiences: updatedExperiences };
    }),
}));
