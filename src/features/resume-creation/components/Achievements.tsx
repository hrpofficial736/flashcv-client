import React, { useEffect, useState } from "react";
import { FormTextField } from "../../../components/FormTextField";
import { FaPlus } from "react-icons/fa6";
import { AchievementsInterface } from "../exports/interfaces/exports";
import { MoreButton } from "../../../components/MoreButton";
import { useAchievementsStore } from "../../../stores/useAchievementsStore";
import { v4 as uuidv4 } from "uuid";
import { ProceedButton } from "./common/ProceedButton";

export const Achievements: React.FC = () => {
  const [formData, setFormData] = useState<AchievementsInterface[]>([{
    id: uuidv4(),
    name: "",
    date: "",
    description: ""
  }]);
  const {achievements, addAchievements} = useAchievementsStore();

  useEffect(() => {
    if (achievements.length !== 0) {
      console.log(achievements);
      
      setFormData(() =>
        achievements
      );
    }
  }, [])
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const {name, value} = e.target;
    setFormData((prevData) => {
      const updatedFormData = [...prevData];
      updatedFormData[index] = {...updatedFormData[index], [name]: value};
      return updatedFormData;
    })
  };

  const addMoreAchievements = () => {
    setFormData((prevData) => [
      ...prevData,
      {
        id: uuidv4(),
        name: "",
        date: "",
        description: "",
      },
    ]);
  }
  return (
    <section className="flex flex-col gap-y-3 font-poppins">
      <h1 className="text-xl font-semibold">Achievements</h1>
      {formData.map((achievement, index) => {
        return (
          <div className="flex flex-col gap-y-5 mb-5" key={achievement.id}>
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
      <div className="flex flex-col items-end gap-y-8">
              <MoreButton
                onPressed={addMoreAchievements}
                icon={<FaPlus />}
                text="Add more achievements"
              />
              <ProceedButton
                type="button"
                onPressed={() => {
                  addAchievements(formData);
                }}
                text="Save Achievements"
              />
            </div>
    </section>
  );
};
