import { ResumeInterface } from "./resumeInterface";

export interface GlobalUser {
  name: string;
  email: string;
  username: string;
  resumeCount?: number;
  imageUrl?: string;
  resumes?: ResumeInterface[];
}

export interface GlobalUserActions {
  updateUser: (
    newInfo: GlobalUser
  ) => void;
}
