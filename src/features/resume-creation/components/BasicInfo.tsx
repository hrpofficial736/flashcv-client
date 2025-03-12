import React, { useEffect, useState } from "react";
import { FormTextField } from "../../../components/FormTextField";
import { FormFieldInterface } from "../../../utils/interfaces/formFieldInterface";
import { BasicInfoInterface } from "../interfaces/basicInfoInterface";
import { ProceedButton } from "./common/ProceedButton";
import { FaMagic, FaRegArrowAltCircleRight } from "react-icons/fa";
import { SecondaryButton } from "../../../components/SecondaryButton";
import { GenerateWithAIButton } from "./common/GenerateWithAI";
import { AnimatePresence, motion } from "motion/react";
import { useResumeSectionIndexStore } from "../../../stores/useResumeSectionIndexStore";

export const BasicInfo: React.FC = () => {
  const { currentIndex, incrementCurrentIndex } = useResumeSectionIndexStore();
  
  const [display, setDisplay] = useState<boolean>(true);
  const [formData, setFormData] = useState<BasicInfoInterface>({
    fullName: "",
    dob: "",
    description: "",
    jobTitle: "",
    location: "",
    address: "",
  });

  const textFieldElements: Array<FormFieldInterface> = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      value: formData.fullName,
      placeholder: "Enter your full name",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      value: formData.description,
      placeholder: "Describe yourself...",
    },
    {
      name: "dob",
      label: "Date of Birth",
      type: "date",
      value: formData.dob,
      placeholder: "Select your date of birth",
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      value: formData.location,
      placeholder: "Enter your location",
    },
    {
      name: "jobTitle",
      label: "Job Title",
      type: "text",
      value: formData.jobTitle,
      placeholder: "Enter your professional title",
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      value: formData.address,
      placeholder: "Enter your full address",
    },
  ];
  useEffect(() => {
    console.log("in basic info, index: ", currentIndex);
    if (currentIndex !== 0) {
      setDisplay(false);
    }
    return () => {
      console.log("Unmounted");
    };
  }, [currentIndex]);

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
 

  const validateForm = () => {
    const errors = textFieldElements.map(
      (field) => !formData[field.name as keyof BasicInfoInterface]
    );
    return !errors.includes(true);
  }

  const proceed = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Proceeding to next section");
      incrementCurrentIndex();
    }
  };

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => console.log("Exit completed!")}
    >
      {display && (
        <motion.form
        onSubmit={proceed}
          key="basic-info"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className={`flex flex-col gap-y-5 w-[90%] h-[60%] font-poppins px-5 py-5 m-10`}
        >
          <h1 className="text-2xl font-semibold">Basic Information</h1>
          <div className="grid grid-rows-3 grid-cols-2 mt-3 gap-5">
            {textFieldElements.map((element, index) => (
              <div className="flex items-end gap-x-7" key={index}>
                <FormTextField
                  name={element.name}
                  changeHandler={changeEventHandler}
                  value={element.value ?? ""}
                  type={element.type}
                  label={element.label}
                  placeholder={element.placeholder}
                />
                {index === 1 && (
                  <GenerateWithAIButton
                    text="Generate with AI"
                    icon={<FaMagic />}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-x-2 mt-3">
            <SecondaryButton text="Skip to Dashboard" />
            <ProceedButton icon={<FaRegArrowAltCircleRight />} text="Proceed" />
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
};
