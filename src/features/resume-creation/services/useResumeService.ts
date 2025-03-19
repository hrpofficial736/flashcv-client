import axios from "axios";
import { arrayBuffer } from "stream/consumers";

export default function useResumeService () {
    return { uploadResume, deleteResume };
}

async function uploadResume (resume: File) {
    const fileBuffer = resume.arrayBuffer;
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/resume/upload/hrpofficial736`, {
        fileBuffer,
        resume
    });
}

async function deleteResume (resumeId: number) {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_URI}/resume/delete/${resumeId}`
    );
}