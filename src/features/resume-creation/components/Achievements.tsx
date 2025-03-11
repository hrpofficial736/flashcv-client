import React, { useState } from "react";
import { FormTextField } from "../../../components/FormTextField";
import { FaPlus } from "react-icons/fa6";
import { AchievementsInterface } from "../exports/interfaces/exports";
import { MoreButton } from "../../../components/MoreButton";

export const Achievements: React.FC = () => {
  const [formData, setFormData] = useState<Array<AchievementsInterface>>([
    {
      name: "",
      description: "",
      date: "",
    },
  ]);
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedFormData : Array<AchievementsInterface> = [...prevData];
      updatedFormData[index] = {...updatedFormData[index], [name]: value};
      return updatedFormData;
    });
  };
  const addMoreAchievements = () => {
    setFormData((prevData) => {
      const updatedFormData: Array<AchievementsInterface> = [
        ...prevData,
        { name: "", description: "", date: "" },
      ];
      return updatedFormData;
    });
  };
  return (
    <section className="flex flex-col gap-y-3 font-poppins">
      <h1 className="text-xl font-semibold">Achievements</h1>
      {formData.map((achievement, index) => {
        return (
          <div className="flex flex-col gap-y-5 mb-5" key={index}>
            <FormTextField
              name="name"
              label="Achievement"
              placeholder="E.g. Digital Marketing etc."
              type="text"
              value={achievement.name}
              changeHandler={(e) => changeEventHandler(e, index)}
            />
            <FormTextField
              placeholder="Describe your achievement..."
              value={achievement.description}
              name="description"
              label="Description"
              type="text"
              changeHandler={(e) => changeEventHandler(e, index)}
            />
            <FormTextField
              placeholder="Date of achievement..."
              value={achievement.date}
              name="date"
              label="Date of achievement"
              type="date"
              changeHandler={(e) => changeEventHandler(e, index)}
            />
          </div>
        );
      })}
      <MoreButton
        onPressed={addMoreAchievements}
        icon={<FaPlus />}
        text="Add more achievements"
      />
    </section>
  );
};
