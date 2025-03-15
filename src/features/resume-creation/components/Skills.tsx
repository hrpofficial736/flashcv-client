import React, { useEffect, useState } from "react";
import { FormTextField } from "../../../components/FormTextField";
import { FaPlus } from "react-icons/fa6";
import { SkillInterface } from "../exports/interfaces/exports";
import { CustomDropDown } from "../../../components/CustomDropDown";
import { MoreButton } from "../../../components/MoreButton";
import { useSkillsStore } from "../../../stores/useSkillsStore";
import { v4 as uuidv4 } from "uuid";
import { ProceedButton } from "./common/ProceedButton";

export const Skills: React.FC = () => {
  const [formData, setFormData] = useState<Array<SkillInterface>>([
    {
      id: uuidv4(),
      name: "",
      level: "",
    },
  ]);

  const { skills, addSkills } = useSkillsStore();

  useEffect(() => {
    setFormData((prevData) => {
      const updatedFormData: SkillInterface[] = [...prevData]; 

      skills.forEach((skill, index) => {
        if (skill.name && skill.level) {
          updatedFormData[index] = skill; 
        }
      });

      return updatedFormData;
    });
  }, []);
  const changeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedFormData: Array<SkillInterface> = [...prevData];
      updatedFormData[index] = { ...updatedFormData[index], [name]: value };
      return updatedFormData;
    });
  };

  const addMoreSkills = () => {

    setFormData((prevData) => {
      const updatedFormData = [
        ...prevData,
        {
          id: uuidv4(),
          name: "",
          level: "",
        },
      ];
      return updatedFormData;
    });
  };

  const getLevelFromDropDown = (value: string, index: number) => {
    setFormData((prevData) => {
      const updatedFormData = [...prevData];
      updatedFormData[index] = { ...updatedFormData[index], level: value };
      return updatedFormData;
    });
  };

  return (
    <section className="flex flex-col gap-y-3 font-poppins">
      <h1 className="text-xl font-semibold">Skills</h1>
      {formData.map((skill, index) => {
        return (
          <div
            key={skill.id}
            className="flex max-lg:flex-col gap-y-4 max-lg:items-start items-end gap-x-3 mb-5"
          >
            <FormTextField
              name="name"
              label="Skill"
              placeholder="E.g. Digital Marketing etc."
              type="text"
              value={skill.name ? skill.name : ""}
              changeHandler={(e) => changeEventHandler(e, index)}
            />
            <CustomDropDown
              dropDownIndex={index}
              callback={getLevelFromDropDown}
              items={["Beginner", "Intermediate", "Advanced"]}
            />
          </div>
        );
      })}
      <div className="flex flex-col items-end">
        <MoreButton
          onPressed={addMoreSkills}
          icon={<FaPlus />}
          text="Add more skills"
        />
        <ProceedButton
          type="button"
          onPressed={() => {
            addSkills(formData);
          }}
          text="Save skills"
        />
      </div>
    </section>
  );
};
