import { create } from "zustand";
import { ExperienceInfoInterface } from "../features/resume-creation/interfaces/experienceInfoInterface";
import { v4 as uuidv4 } from "uuid";

interface ExperiencesStore {
  experiences: ExperienceInfoInterface[];
  addExperience: (experience: Omit<ExperienceInfoInterface, "id">) => void;
  updateExperience: (
    id: string,
    experience: Partial<ExperienceInfoInterface>
  ) => void;
  removeExperience: (id: string) => void;
}

export const useExperiencesStore = create<ExperiencesStore>((set) => ({
  experiences: [],
  addExperience: (experience) =>
    set((state) => ({
      experiences: [...state.experiences, { ...experience, id: uuidv4() }],
    })),
  updateExperience: (id, updatedExperience) =>
    set((state) => ({
      experiences: state.experiences.map((experience) =>
        experience.id === id
          ? { ...experience, ...updatedExperience }
          : experience
      ),
    })),
  removeExperience: (id) =>
    set((state) => ({
      experiences: state.experiences.filter(
        (experience) => experience.id !== id
      ),
    })),
}));
