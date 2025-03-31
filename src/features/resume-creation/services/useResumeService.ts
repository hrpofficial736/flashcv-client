import { ReactElement } from "react";
import { DocumentProps, pdf } from "@react-pdf/renderer";
import { useUserStore } from "../../../stores/useUserStore";
import { api } from "../../../services/axiosService";

export default function useResumeService() {
  return { uploadResume };
}

async function uploadResume(
  document: ReactElement<DocumentProps, string>,
  username: string,
  title: string
) {
  const fileBlob = await pdf(document).toBlob();
  const fileName = `${username}-resume-${Date.now()}`;
  const response = await api.post(
    `${import.meta.env.VITE_SERVER_URI}/resume/upload/${username}`,
    fileBlob,
    {
      headers: {
        "Content-Type": "application/pdf",
        "X-File-Name": fileName,
        "Resume-Title": title,
        'Authorization': localStorage.getItem("auth_access_token")
      },
      
    }
  );

  if (response.data.statusCode === 201) {
    console.log(response.data);
    useUserStore.getState().updateUser(response.data.data);
    return true;
  } else false;
}
