export interface GlobalUser {
  name: string;
  email: string;
  username: string;
  avatarUrl?: string;
  resumeCount?: number;
  resumes?: string[];
}

export interface GlobalUserActions {
  updateUser: (
    resumes?: GlobalUser["resumes"]
  ) => void;
}
