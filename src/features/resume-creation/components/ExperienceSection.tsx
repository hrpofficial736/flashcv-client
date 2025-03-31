import React, { useEffect, useState } from "react";
import { useResumeSectionIndexStore } from "../../../stores/useResumeSectionIndexStore";
import { ExperienceInfoInterface } from "../interfaces/experienceInfoInterface";
import { AnimatePresence, motion } from "motion/react";
import { FormTextField } from "../../../components/FormTextField";
import { SecondaryButton } from "../../../components/SecondaryButton";
import {
  FaMagic,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { ProceedButton } from "./common/ProceedButton";
import { MoreButton } from "../../../components/MoreButton";
import { FaPlus } from "react-icons/fa6";
import { useExperiencesStore } from "../../../stores/useExperiencesStore";
import { GenerateWithAIButton } from "./common/GenerateWithAI";
import { v4 as uuidv4 } from "uuid";

export const ExperienceSection: React.FC = () => {
  const { currentIndex, decrementCurrentIndex, incrementCurrentIndex } =
    useResumeSectionIndexStore();
  const { experiences, addExperiences } = useExperiencesStore();
  const [formData, setFormData] = useState<ExperienceInfoInterface[]>([
    {
      id: uuidv4(),
      jobName: "",
      companyName: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ]);

  useEffect(() => {
    if (experiences.length !== 0) {
      console.log(experiences);

      setFormData(() => experiences);
    }
  }, []);

  const changeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prevData) => {
      const updatedFormData: ExperienceInfoInterface[] = [...prevData];
      updatedFormData[index] = { ...updatedFormData[index], [name]: value };
      return updatedFormData;
    });
  };

  const addMoreExperiences = () => {
    setFormData((prevData) => {
      const updatedFormData: ExperienceInfoInterface[] = [
        ...prevData,
        {
          id: uuidv4(),
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
  const getDescriptionFromOpenRouter = (output: string, index: number) => {
    console.log("Output in exp section : ", output);

    setFormData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, responsibilities: output } : item
      )
    );
  };

  const [checked, setChecked] = useState<boolean>(false);
  return (
    <AnimatePresence mode="wait">
      {currentIndex === 3 && (
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            addExperiences(formData);
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
          className={`flex flex-col max-md:text-xs gap-y-5 w-[80%] lg:w-[90%] h-[60%] font-poppins px-5 py-5 lg:m-10`}
        >
          <h1 className="lg:text-2xl text-lg font-semibold">
            Experience Information
          </h1>
          {formData.map((element, index) => {
            return (
              <div
                key={element.id}
                className="flex flex-col lg:grid lg:grid-rows-3 lg:grid-cols-2 max-md:gap-5"
              >
                <FormTextField
                  name={"jobName"}
                  changeHandler={(e) => changeEventHandler(e, index)}
                  value={
                    experiences.find(
                      (experienceItem) => experienceItem.id === element.id
                    )?.jobName || element.jobName
                  }
                  type="text"
                  label={"Job name"}
                  placeholder={"E.g. Software Developer..."}
                />
                <FormTextField
                  name={"companyName"}
                  changeHandler={(e) => changeEventHandler(e, index)}
                  value={
                    experiences.find(
                      (experienceItem) => experienceItem.id === element.id
                    )?.companyName || element.companyName
                  }
                  type="text"
                  label={"Company name"}
                  placeholder={"E.g. XYZ Company Ltd."}
                />
                <FormTextField
                  name={"location"}
                  changeHandler={(e) => changeEventHandler(e, index)}
                  value={
                    experiences.find(
                      (experienceItem) => experienceItem.id === element.id
                    )?.location || element.location!
                  }
                  type="text"
                  label={"Company location"}
                  placeholder={"E.g. India..."}
                />
                <div className="flex flex-col gap-y-5">
                  <FormTextField
                    name={"startDate"}
                    changeHandler={(e) => changeEventHandler(e, index)}
                    value={
                      experiences.find(
                        (experienceItem) => experienceItem.id === element.id
                      )?.startDate || element.startDate
                    }
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
                  value={
                    experiences.find(
                      (experienceItem) => experienceItem.id === element.id
                    )?.endDate || element.endDate
                  }
                  type="date"
                  label={"End date"}
                  placeholder={"Job will end on..."}
                />
                <div>
                  <p className="text-sm font-semibold font-poppins">
                    Responsibilities
                  </p>
                  <textarea
                    maxLength={200}
                    onChange={(e) => changeEventHandler(e, index)}
                    className="border border-zinc-400 max-md:max-w-[250px] rounded-lg px-3 py-2 resize-none"
                    placeholder="Your contribution in the company..."
                    value={
                      experiences.find((item) => item.id === element.id)
                        ?.responsibilities || element.responsibilities
                    }
                    name="responsibilities"
                  />

                  <GenerateWithAIButton
                    index={index}
                    contentTypeToGenerate="job"
                    prompt={element.jobName}
                    callback={getDescriptionFromOpenRouter}
                    text="Generate with AI"
                    icon={<FaMagic />}
                  />
                </div>
              </div>
            );
          })}
          <div className="flex flex-col items-end gap-y-4">
            <MoreButton
              onPressed={addMoreExperiences}
              icon={<FaPlus />}
              text="Add more achievements"
            />
            <ProceedButton
              type="button"
              onPressed={() => {
                addExperiences(formData);
              }}
              text="Save Experiences"
            />
          </div>
          <div className="flex justify-end gap-x-2 mt-3">
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
