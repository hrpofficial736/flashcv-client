import React, { useState } from "react";
import { motion } from "motion/react";
import { EducationInfoInterface } from "../interfaces/educationInfoInterface";
import { FormFieldInterface } from "../../../utils/interfaces/formFieldInterface";
import { FormTextField } from "../../../components/FormTextField";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { SecondaryButton } from "../../../components/SecondaryButton";
import { ProceedButton } from "./ProceedButton";

export const EducationSection: React.FC<{ display: boolean }> = ({
  display,
}) => {
  const [formData, setFormData] = useState<EducationInfoInterface>({
    degree: "",
    fieldOfStudy: "",
    universityName: "",
    startDate: "",
    endDate: "",
    location: "",
    cgpa: 0,
  });
  const textFieldElements: Array<FormFieldInterface> = [
    {
      name: "degree",
      label: "Degree",
      type: "text",
      value: formData.degree,
      placeholder: "Your Degree",
    },
    {
      name: "fieldOfStudy",
      label: "Field of Study",
      type: "text",
      value: formData.fieldOfStudy,
      placeholder: "E.g. Computer Science",
    },
    {
      name: "universityName",
      label: "University",
      type: "date",
      value: formData.universityName,
      placeholder: "Enter university name",
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      value: formData.location,
      placeholder: "Enter university location",
    },
    {
      name: "startDate",
      label: "Start Date",
      type: "date",
      value: formData.startDate,
      placeholder: "Course started on...",
    },
    {
      name: "endDate",
      label: "End Date",
      type: "date",
      value: formData.endDate,
      placeholder: "Course ended on...",
    },
    {
      name: "cgpa",
      label: "CGPA",
      type: "number",
      value: formData.cgpa,
      placeholder: "Enter your CGPA",
    },
  ];
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedFormData = { ...prevData, [name]: value };
      return updatedFormData;
    });
  };
  return (
    <motion.section
      initial={{
        x: 0,
      }}
      animate={{
        x: -100,
      }}
      transition={{ duration: 2 }}
      exit={{
        x: -200,
      }}
      className={`${!display && "hidden"}`}
    >
      <h1 className="text-2xl font-semibold">Education Information</h1>
      <div className="grid grid-rows-3 grid-cols-2 mt-3 gap-5">
        {textFieldElements.map((element) => {
          return (
            <div className="flex items-end gap-x-7">
              <FormTextField
                name={element.name}
                changeHandler={(e) => changeEventHandler(e)}
                value={element.value ?? 0}
                type={element.type}
                label={element.label}
                placeholder={element.placeholder}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end gap-x-2 mt-3 ">
        <SecondaryButton text="Skip to Dashboard" />
        <ProceedButton icon={<FaRegArrowAltCircleRight />} text="Proceed" />
      </div>
    </motion.section>
  );
};
