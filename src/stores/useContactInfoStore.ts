import { create } from "zustand";
import { ContactInfoInterface } from "../features/resume-creation/interfaces/contactInfoInterface";

interface ContactInfoStore {
  contactInfo: ContactInfoInterface;
  addContact: (info: ContactInfoInterface) => void;
  updateContact: (info: Partial<ContactInfoInterface>) => void;
  removeContact: () => void;
}

export const useContactInfoStore = create<ContactInfoStore>((set) => ({
  contactInfo: {
    phoneNo: "",
    email: "",
    socials: [],
  },
  addContact: (info) =>
    set(() => ({
      contactInfo: info,
    })),
  updateContact: (info) =>
    set((state) => ({
      contactInfo: { ...state.contactInfo, info },
    })),
  removeContact: () =>
    set(() => ({
      contactInfo: {
        phoneNo: "",
        email: "",
        socials: [],
      },
    })),
}));
