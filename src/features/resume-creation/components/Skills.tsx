import React, { useState } from "react";
import { FormTextField } from "../../../components/FormTextField";
import { FaPlus } from "react-icons/fa6";
import { SkillInterface } from "../exports/interfaces/exports";
import { CustomDropDown } from "../../../components/CustomDropDown";
import { MoreButton } from "../../../components/MoreButton";
import { useSkillsStore } from "../../../stores/useSkillsStore";



export const Skills: React.FC<{callback: (info: SkillInterface[]) => void;}> = ({callback}) => {
  const [formData, setFormData] = useState<Array<SkillInterface>>([
    {
      id: crypto.randomUUID(),
      name: "",
      level: "",
    },
  ]);
  const {skills} = useSkillsStore();
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedFormData : Array<SkillInterface> = [...prevData];
      updatedFormData[index] = {...updatedFormData[index], [name]: value};
      return updatedFormData;
    });
    callback(formData);
  };

  const addMoreSkills = () => {
    console.log("in method");

    setFormData((prevData) => {
      const updatedFormData = [
        ...prevData,
        {
          id: crypto.randomUUID(),
          name: "",
          level: "",
        },
      ];
      return updatedFormData;
    });
    console.log(formData);
  };

  
    
      
  return (
    <section className="flex flex-col gap-y-3 font-poppins">
      <h1 className="text-xl font-semibold">Skills</h1>
      {formData.map((skill, index) => {
        return (
          <div key={skill.id} className="flex items-end gap-x-3 mb-5">
            <FormTextField
              name="name"
              label="Skill"
              placeholder="E.g. Digital Marketing etc."
              type="text"
              value={skills.find((skillItem) => skillItem.id === skill.id)?.name !== "" ? skills.find((skillItem) => skillItem.id === skill.id)?.name! : skill.name}
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
    </section>
  );
};
