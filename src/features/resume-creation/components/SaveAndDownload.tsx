import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useResumeSectionIndexStore } from "../../../stores/useResumeSectionIndexStore";
import { Main } from "./pdf/Main";
import { ProceedButton } from "./common/ProceedButton";
import { pdf, PDFDownloadLink } from "@react-pdf/renderer";
import { ResumeDocument } from "./pdf/ResumeDocument";
import { SecondaryButton } from "../../../components/SecondaryButton";
import { Loader } from "../../../components/Loader";
import { useNavigate, useParams } from "react-router";
import useResumeService from "../services/useResumeService";

export const SaveAndDownload: React.FC = () => {
  const { currentIndex, decrementCurrentIndex } = useResumeSectionIndexStore();
  const [isPdfReady, setIsPdfReady] = useState<boolean>(false);
  const navigate = useNavigate();
  const { username } = useParams<{ username: string }>();
  const { uploadResume } = useResumeService();
  useEffect(() => {
    setTimeout(() => setIsPdfReady(true), 3000);
  }, []);
  return (
    <AnimatePresence mode="wait">
      {currentIndex === 5 && (
        <motion.section
          onSubmit={(e) => {
            e.preventDefault();
          }}
          key={"preview-section"}
          initial={{
            x: 300,
          }}
          animate={{
            x: 0,
          }}
          transition={{ duration: 0.5 }}
          exit={{
            x: -200,
          }}
          className={`flex h-[100vh] flex-col gap-y-10 font-poppins px-5 py-5 lg:mx-10`}
        >
          <div className="flex flex-col gap-y-1">
            <h1 className="lg:text-2xl text-lg font-semibold ">
              Save and Download
            </h1>
            <p className="lg:text-base text-sm font-light ">
              Before downloading the resume, please make sure that all the
              details you provided are correct.
            </p>
          </div>
          {isPdfReady ? (
            <div className="flex flex-col items-center gap-y-10 h-full">
              <Main />
              <div className="flex gap-x-3">
                <SecondaryButton
                  onPressed={decrementCurrentIndex}
                  text="Previous Step"
                />
                <PDFDownloadLink
                  document={<ResumeDocument />}
                  fileName="resume.pdf"
                >
                  <ProceedButton
                    onPressed={async () => {
                      const blob = await pdf(<ResumeDocument />).toBlob();
                      const file = new File(
                        [blob],
                        `${username}-resume-${Date.now()}`
                      );
                      const isResumeUploaded = await uploadResume(
                        <ResumeDocument />,
                        username!
                      );
                      if (isResumeUploaded)
                        navigate("/hrpofficial736/dashboard");
                    }}
                    text="Download PDF"
                  />
                </PDFDownloadLink>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </motion.section>
      )}
    </AnimatePresence>
  );
};
