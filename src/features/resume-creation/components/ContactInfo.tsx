import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useResumeSectionIndexStore } from "../../../stores/useResumeSectionIndexStore";
import { ContactInfoInterface } from "../exports/interfaces/exports";
import { FormTextField } from "../../../components/FormTextField";
import { SecondaryButton } from "../../../components/SecondaryButton";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { ProceedButton } from "./common/ProceedButton";
import { MoreButton } from "../../../components/MoreButton";
import { FaPlus } from "react-icons/fa6";

export const ContactInfo: React.FC = () => {
  const { currentIndex, decrementCurrentIndex, incrementCurrentIndex } = useResumeSectionIndexStore();
  const [isError, setIsError] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactInfoInterface>({
    phoneNo: "",
    email: "",
    socials: [""],
  });

  const addMoreSocials = () => {
    setFormData((prevData) => {
      const updatedFormdata : ContactInfoInterface = {...prevData, socials: [...(prevData.socials!), ""]};
      return updatedFormdata;
    })
  }
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>, index?: number) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (name === "socials") {
        const updatedFormData = { ...prevData, [name]: [...prevData.socials![index!], value]};
        return updatedFormData;
      }
      const updatedFormData = { ...prevData, [name]: value };
      return updatedFormData;
    });
  };

  const proceed = () => {
    if (formData.email && formData.phoneNo && formData.socials![0] !== "") {
      incrementCurrentIndex();
      return;
    }
    setIsError(true);
    return;
  }
  return (
    <AnimatePresence mode="wait">
      {currentIndex === 4 && (
        <motion.section
          key={"contact-info-section"}
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
          className={`flex flex-col gap-y-5 w-[90%] h-[60%] font-poppins px-5 py-5 m-10`}
        >
          <h1 className="text-2xl font-semibold">Contact Information</h1>
          <div className="flex flex-col gap-y-5">
            <div className="flex gap-x-10">
              <FormTextField error={isError}
                changeHandler={changeEventHandler}
                name="phoneNo"
                value={formData.phoneNo}
                type="tel"
                label="Phone number"
                placeholder="E.g. 1234567890"
              />
              
              <FormTextField error={isError}
                changeHandler={changeEventHandler}
                name="email"
                value={formData.email}
                type="email"
                label="Email"
                placeholder="E.g. xyz@example.com"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <h1 className="text-lg font-medium">Social Links</h1>
              {formData.socials?.map((link, index) => {
                return (
                  <FormTextField error={isError}
                    label="Link"
                    key={index}
                    name="socials"
                    type="text"
                    changeHandler={changeEventHandler}
                    value={link}
                    placeholder="http://my-social-profile.xyz"
                  />
                );
              })}
              <MoreButton onPressed={addMoreSocials} text="Add more socials" icon={<FaPlus />} />
            </div>
          </div>
          <div className="flex justify-end gap-x-2 mt-3 ">
            <SecondaryButton
              text="Previous Step"
              icon={<FaRegArrowAltCircleLeft />}
              onPressed={decrementCurrentIndex}
            />
            <ProceedButton onPressed={proceed} icon={<FaRegArrowAltCircleRight />} text="Proceed" />
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
