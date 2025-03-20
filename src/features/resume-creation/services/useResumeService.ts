import axios from "axios";
import { ReactElement } from "react";
import { DocumentProps, pdf } from "@react-pdf/renderer";
import { useUserStore } from "../../../stores/useUserStore";

export default function useResumeService () {
    return { uploadResume, deleteResume };
}

async function uploadResume (document: ReactElement<DocumentProps, string>, username: string) {
    const fileBlob = await pdf(document).toBlob();
    const fileName = `${username}-resume-${Date.now()}`;
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URI}/resume/upload/${username}`,
      fileBlob, 
      {
        headers: {
          "Content-Type": "application/pdf",
          "X-File-Name": fileName, 
        },
      }
    );

    if (response.data.statusCode === 201) {
        console.log(response.data);
        useUserStore.getState().updateUser(response.data); 
        return true; 
        }
    else false;
}

async function deleteResume (resumeId: number) {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_URI}/resume/delete/${resumeId}`
    );
}