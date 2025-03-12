import React, { useState } from "react";
import { useResumeSectionIndexStore } from "../../../stores/useResumeSectionIndexStore";
import { ExperienceInfoInterface } from "../interfaces/experienceInfoInterface";
import { AnimatePresence, motion } from "motion/react";
import { FormTextField } from "../../../components/FormTextField";
import { SecondaryButton } from "../../../components/SecondaryButton";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { ProceedButton } from "./common/ProceedButton";
import { MoreButton } from "../../../components/MoreButton";
import { FaPlus } from "react-icons/fa6";

export const ExperienceSection: React.FC = () => {
  const { currentIndex, decrementCurrentIndex, incrementCurrentIndex } = useResumeSectionIndexStore();
  const [formData, setFormData] = useState<Array<ExperienceInfoInterface>>([
    {
      jobName: "",
      companyName: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ]);

  const changeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedFormData: Array<ExperienceInfoInterface> = [...prevData];
      updatedFormData[index] = { ...updatedFormData[index], [name]: value };
      return updatedFormData;
    });
  };

  const addMoreExperiences = () => {
    setFormData((prevData) => {
      const updatedFormData: Array<ExperienceInfoInterface> = [
        ...prevData,
        {
          jobName: "",
          companyName: "",
          responsibilities: "",
          startDate: "",
          endDate: "",
          location: "",
        },
      ];
      return updatedFormData;
    });
  };
  
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <AnimatePresence mode="wait">
      {currentIndex === 3 && (
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            incrementCurrentIndex();
          }}
          key={"education-section"}
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
          className={`flex flex-col  gap-y-5 w-[90%] h-[60%] font-poppins px-5 py-5 m-10`}
        >
          <h1 className="text-2xl font-semibold">Experience Information</h1>
          {formData.map((element, index) => {
            return (
              <div
                key={index}
                className="grid gap-y-5 gap-x-20 grid-cols-3 mt-3"
              >
                <FormTextField
                  name={"jobName"}
                  changeHandler={(e) => changeEventHandler(e, index)}
                  value={element.jobName}
                  type="text"
                  label={"Job name"}
                  placeholder={"E.g. Software Developer..."}
                />
                <FormTextField
                  name={"companyName"}
                  changeHandler={(e) => changeEventHandler(e, index)}
                  value={element.companyName}
                  type="text"
                  label={"Company name"}
                  placeholder={"E.g. XYZ Company Ltd."}
                />
                <FormTextField
                  name={"location"}
                  changeHandler={(e) => changeEventHandler(e, index)}
                  value={element.location ?? ""}
                  type="text"
                  label={"Company location"}
                  placeholder={"E.g. India..."}
                />
                <div className="flex flex-col gap-y-5">
                  <FormTextField
                    name={"startDate"}
                    changeHandler={(e) => changeEventHandler(e, index)}
                    value={element.startDate}
                    type="date"
                    label={"Start date"}
                    placeholder={"Job started on..."}
                  />
                  <div className="flex gap-x-2 items-center">
                    <input
                      checked={checked}
                      onChange={() => {
                        setChecked((prev) => {
                          const newChecked = !prev;

                          setFormData((prevData) => {
                            const updatedFormData: Array<ExperienceInfoInterface> =
                              [...prevData];
                            updatedFormData[index] = {
                              ...updatedFormData[index],
                              endDate: newChecked
                                ? updatedFormData[index].startDate
                                : "",
                            };
                            return updatedFormData;
                          });

                          return newChecked;
                        });
                      }}
                      type="checkbox"
                    />
                    <label className="text-sm">Still working here...</label>
                  </div>
                </div>

                <FormTextField
                  name={"endDate"}
                  changeHandler={(e) => changeEventHandler(e, index)}
                  value={element.endDate}
                  type="date"
                  label={"End date"}
                  placeholder={"Job will end on..."}
                />
                <div className="">
                  <p className="text-sm font-semibold font-poppins">
                    Responsibilities
                  </p>
                  <textarea
                    maxLength={200}
                    onChange={(e) => changeEventHandler(e, index)}
                    className="border border-zinc-400 rounded-lg px-3 py-2 resize-none"
                    placeholder="Your contribution in the company..."
                    value={element.responsibilities}
                    name="responsibilities"
                  />
                </div>
              </div>
            );
          })}
          <MoreButton
            onPressed={addMoreExperiences}
            text="Add more experiences"
            icon={<FaPlus />}
          />
          <div className="flex justify-end gap-x-2 mt-3 ">
            <SecondaryButton
              text="Previous Step"
              icon={<FaRegArrowAltCircleLeft />}
              onPressed={decrementCurrentIndex}
            />
            <ProceedButton icon={<FaRegArrowAltCircleRight />} text="Proceed" />
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
};
