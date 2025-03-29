import { create } from "zustand";
import { BasicInfoInterface } from "../features/resume-creation/interfaces/basicInfoInterface";

interface BasicInfoStore {
  info: BasicInfoInterface;
  addInfo: (info: BasicInfoInterface) => void;
  updateInfo: (info: Partial<BasicInfoInterface>) => void;
  removeInfo: () => void;
}

export const useBasicInfoStore = create<BasicInfoStore>((set) => ({
  info: {
    fullName: "",
    description: "",
    jobTitle: "",
    dob: "",
    location: "",
    address: "",
  },
  addInfo: (info) =>
    set(() => ({
      info,
    })),
  updateInfo: (info) =>
    set((state) => ({
      info: { ...state.info, info },
    })),
  removeInfo: () =>
    set(() => ({
      info: {
        fullName: "",
        description: "",
        jobTitle: "",
        dob: "",
        location: "",
        address: "",
      },
    })),
}));
