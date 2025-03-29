import { create } from "zustand";
import {
  EducationInfoInterface,
} from "../features/resume-creation/interfaces/educationInfoInterface";


interface EducationInfoStore {
    info: EducationInfoInterface,
    addEducation: (info: EducationInfoInterface) => void;
    updateEducation: (info: Partial<EducationInfoInterface>) => void;
    removeEducation: () => void;
}

export const useEducationInfoStore = create<EducationInfoStore>((set) => ({
  info: {
    degree: "",
    fieldOfStudy: "",
    universityName: "",
    location: "",
    startDate: "",
    endDate: "",
    cgpa: 0,
  },
  addEducation: (info) =>
    set(() => ({
      info,
    })),
  updateEducation: (info) =>
    set((state) => ({
      info: { ...state.info, info },
    })),
  removeEducation: () =>
    set(() => ({
      info: {
        degree: "",
        fieldOfStudy: "",
        universityName: "",
        location: "",
        startDate: "",
        endDate: "",
        cgpa: 0,
      },
    })),
}));
