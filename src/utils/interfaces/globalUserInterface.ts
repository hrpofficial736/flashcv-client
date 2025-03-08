export interface GlobalUser {
  name: string;
  email: string;
  username: string;
  avatarUrl?: string;
  resumeCount?: number;
}

export interface GlobalUserActions {
  updateUser: (
    name: GlobalUser["name"],
    email: GlobalUser["email"],
    username: GlobalUser["username"],
    avatar?: GlobalUser["avatarUrl"],
    resumeCount?: GlobalUser["resumeCount"],
  ) => void;
}
