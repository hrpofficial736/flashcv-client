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
import { useBasicInfoStore } from "../../../stores/useBasicInfoStore";
import { useNavigate } from "react-router";

export const BasicInfo: React.FC = () => {
  const { currentIndex, incrementCurrentIndex } = useResumeSectionIndexStore();
  const {info, addInfo} = useBasicInfoStore();
  const navigate = useNavigate();
  const [display, setDisplay] = useState<boolean>(true);
  const [formData, setFormData] = useState<BasicInfoInterface>({
    fullName: "",
    dob: "",
    description: "",
    jobTitle: "",
    location: "",
    address: "",
  });

  const getDescriptionFromOpenRouter = (output: string) => {   
    setFormData((prevData) => {
      const updatedFormData  = {...prevData, description: output};
      return updatedFormData;
    })
  }

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
    if (currentIndex !== 0) {
      setDisplay(false);
    }
    return () => {
    };
  }, [currentIndex]);

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
 

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => console.log("Exit completed!")}
    >
      {display && (
        <motion.form
        onSubmit={(e) => {e.preventDefault();
          addInfo(formData);
          incrementCurrentIndex();
        }}
          key="basic-info"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className={`flex flex-col gap-y-5 w-[80%] lg:w-[90%] h-[60%] font-poppins px-5 py-5 lg:m-10`}
        >
          <h1 className="lg:text-2xl text-lg font-semibold">Basic Information</h1>
          <div className="flex flex-col lg:grid lg:grid-rows-3 lg:grid-cols-2 mt-3 gap-5">
            {textFieldElements.map((element, index) => (
              <div className="flex max-lg:flex-col max-lg:items-start max-lg:gap-y-3 items-end gap-x-7" key={index}>
                <FormTextField
                  name={element.name}
                  changeHandler={changeEventHandler}
                  value={info[element.name as keyof BasicInfoInterface] !== "" ? info[element.name as keyof BasicInfoInterface] : element.value!}
                  type={element.type}
                  label={element.label}
                  placeholder={element.placeholder}
                />
                {index === 1 && (
                  <GenerateWithAIButton index={0} contentTypeToGenerate="personal" prompt={formData.jobTitle} callback={getDescriptionFromOpenRouter}
                    text="Generate with AI"
                    icon={<FaMagic />}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex max-lg:flex-col max-lg:gap-y-4 justify-center lg:justify-end gap-x-2 mt-3">
            <SecondaryButton onPressed={() => {
              navigate(`/${localStorage.getItem("username")}/dashboard`);
            }} text="Skip to Dashboard" />
            <ProceedButton icon={<FaRegArrowAltCircleRight />} text="Proceed" />
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
};
