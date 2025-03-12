import React, { useState } from "react";
import { FormTextField } from "../../../components/FormTextField";
import { FaPlus } from "react-icons/fa6";
import { SkillInterface } from "../exports/interfaces/exports";
import { CustomDropDown } from "../../../components/CustomDropDown";
import { MoreButton } from "../../../components/MoreButton";

export const Skills: React.FC = () => {
  const [formData, setFormData] = useState<Array<SkillInterface>>([
    {
      name: "",
      level: "",
    },
  ]);
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedFormData : Array<SkillInterface> = [...prevData];
      updatedFormData[index] = {...updatedFormData[index], [name]: value};
      return updatedFormData;
    });
  };

  const addMoreSkills = () => {
    console.log("in method");

    setFormData((prevData) => {
      const updatedFormData = [
        ...prevData,
        {
          name: "",
          level: "",
        },
      ];
      return updatedFormData;
    });
    console.log(formData);
  };

  
    
      
  return (
    <form className="flex flex-col gap-y-3 font-poppins">
      <h1 className="text-xl font-semibold">Skills</h1>
      {formData.map((skill, index) => {
        return (
          <div key={index} className="flex items-end gap-x-3 mb-5">
            <FormTextField
              name="name"
              label="Skill"
              placeholder="E.g. Digital Marketing etc."
              type="text"
              value={skill.name}
              changeHandler={(e) => changeEventHandler(e, index)}
            />
            <CustomDropDown items={["Beginner", "Intermediate", "Advanced"]} />
          </div>
        );
      })}
      <MoreButton
        onPressed={addMoreSkills}
        icon={<FaPlus />}
        text="Add more skills"
      />
    </form>
  );
};
