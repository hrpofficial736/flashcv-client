import React, { useEffect, useState } from "react";
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
import { useContactInfoStore } from "../../../stores/useContactInfoStore";

export const ContactInfo: React.FC = () => {
  const { currentIndex, decrementCurrentIndex, incrementCurrentIndex } =
    useResumeSectionIndexStore();
  const { contactInfo, addContact } = useContactInfoStore();
  const [formData, setFormData] = useState<ContactInfoInterface>({
    phoneNo: "",
    email: "",
    socials: [""],
  });

  useEffect(() => {
    if (contactInfo.socials?.length !== 0) setFormData(contactInfo);
  }, []);

  const addMoreSocials = () => {
    setFormData((prevData) => {
      const updatedFormdata: ContactInfoInterface = {
        ...prevData,
        socials: [...prevData.socials!, ""],
      };
      return updatedFormdata;
    });
  };
  const changeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (name === "socials") {
        console.log("yes name is", name);
        
        const updatedFormData : ContactInfoInterface = {...prevData};
        updatedFormData.socials![index!] = value;
        console.log(updatedFormData);
        return updatedFormData;
      }
      const updatedFormData = { ...prevData, [name]: value };
      return updatedFormData;
    });
  };

  return (
    <AnimatePresence mode="wait">
      {currentIndex === 4 && (
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            addContact(formData);
            incrementCurrentIndex();
          }}
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
          className={`flex flex-col gap-y-5 w-[80%] lg:w-[90%] h-[60%] font-poppins px-5 py-5 lg:m-10`}
        >
          <h1 className="lg:text-2xl text-lg font-semibold">
            Contact Information
          </h1>
          <div className="flex flex-col gap-y-5">
            <div className="flex max-lg:flex-col gap-y-5 gap-x-10">
              <FormTextField
                changeHandler={changeEventHandler}
                name="phoneNo"
                value={formData.phoneNo}
                type="tel"
                label="Phone number"
                placeholder="E.g. 1234567890"
              />

              <FormTextField
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
                  <FormTextField
                    label="Link"
                    key={index}
                    name="socials"
                    type="text"
                    changeHandler={(e) => changeEventHandler(e, index)}
                    value={link}
                    placeholder="http://my-social-profile.xyz"
                  />
                );
              })}
              <div className="flex flex-col items-end gap-y-8">
                <MoreButton
                  onPressed={addMoreSocials}
                  icon={<FaPlus />}
                  text="Add more socials"
                />
                <ProceedButton
                  type="button"
                  onPressed={() => {
                    addContact(formData);
                  }}
                  text="Save"
                />
              </div>
            </div>
          </div>
          <div className="flex max-lg:flex-col max-lg:gap-y-4 justify-center lg:justify-end gap-x-2 mt-3">
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
