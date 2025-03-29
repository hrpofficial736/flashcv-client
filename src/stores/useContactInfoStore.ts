import { create } from "zustand";
import { ContactInfoInterface } from "../features/resume-creation/interfaces/contactInfoInterface";

interface ContactInfoStore {
  contactInfo: ContactInfoInterface;
  addContact: (info: ContactInfoInterface) => void;
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
}));
