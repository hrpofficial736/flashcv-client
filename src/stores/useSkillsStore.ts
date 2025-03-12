import { create } from "zustand";
import { SkillInterface } from "../features/resume-creation/interfaces/skillsInterface";
import { v4 as uuidv4 } from "uuid";

interface SkillsStore {
  skills: SkillInterface[];
  addSkill: (skill: Omit<SkillInterface, "id">) => void;
  updateSkill: (id: string, skill: Partial<SkillInterface>) => void;
  removeSkill: (id: string) => void;
}

export const useSkillsStore = create<SkillsStore>((set) => ({
  skills: [],
  addSkill: (skill) =>
    set((state) => ({
      skills: [...state.skills, { ...skill, id: uuidv4() }],
    })),
  updateSkill: (id, updatedSkill) =>
    set((state) => ({
      skills: state.skills.map((skill) =>
        skill.id === id ? { ...skill, ...updatedSkill } : skill
      ),
    })),
  removeSkill: (id) =>
    set((state) => ({
      skills: state.skills.filter((skill) => skill.id !== id),
    })),
}));
