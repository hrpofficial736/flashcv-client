import React from "react";
import { useUserStore } from "../../../stores/useUserStore";

export const DashboardPage: React.FC = () => {
  const { name, email, username } = useUserStore();
  return (
    <div>
      {name} {email} {username}
    </div>
  );
};
