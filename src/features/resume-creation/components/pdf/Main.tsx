import React from "react";
import {
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import { ResumeDocument } from "./ResumeDocument";

Font.register({
  family: "Poppins",
  fonts: [
    { src: "/src/assets/fonts/Poppins/Poppins-Black.ttf", fontWeight: 900 },
    { src: "/src/assets/fonts/Poppins/Poppins-Bold.ttf", fontWeight: 800 },
    { src: "/src/assets/fonts/Poppins/Poppins-SemiBold.ttf", fontWeight: 600 },
    { src: "/src/assets/fonts/Poppins/Poppins-Regular.ttf", fontWeight: 400 },
    { src: "/src/assets/fonts/Poppins/Poppins-Medium.ttf", fontWeight: 300 },
    { src: "/src/assets/fonts/Poppins/Poppins-Light.ttf", fontWeight: 100 },
  ],
});

export const Main: React.FC = () => {
  return (
    <PDFViewer  showToolbar={false} className="w-[40%] h-full">
      <ResumeDocument />
    </PDFViewer>
  );
};
