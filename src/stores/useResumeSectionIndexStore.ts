import { create } from "zustand";

interface ResumeSectionIndex {
  currentIndex: number;
  incrementCurrentIndex: () => void;
  decrementCurrentIndex: () => void;
}

export const useResumeSectionIndexStore = create<ResumeSectionIndex>((set) => ({
  currentIndex: 0,
  incrementCurrentIndex: () =>
    set((state) =>{console.log("in store, and index is : ", state.currentIndex + 1);
     return { currentIndex: state.currentIndex + 1 }}),
  decrementCurrentIndex: () =>
    set((state) => ({ currentIndex: state.currentIndex - 1 })),
}));
