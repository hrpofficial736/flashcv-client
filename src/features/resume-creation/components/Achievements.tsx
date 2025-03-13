import React, { useState } from "react";
import { FormTextField } from "../../../components/FormTextField";
import { FaPlus } from "react-icons/fa6";
import { AchievementsInterface } from "../exports/interfaces/exports";
import { MoreButton } from "../../../components/MoreButton";
import { useAchievementsStore } from "../../../stores/useAchievementsStore";
import { v4 as uuidv4 } from "uuid";

export const Achievements: React.FC<{
  callback: (info: AchievementsInterface[]) => void;
}> = ({ callback }) => {
  const { achievements } = useAchievementsStore();
  const [formData, setFormData] = useState<Array<AchievementsInterface>>([
    {
      id: uuidv4(),
      name: "",
      description: "",
      date: "",
    },
  ]);
  const changeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedFormData: Array<AchievementsInterface> = [...prevData];
      updatedFormData[index] = { ...updatedFormData[index], [name]: value };
      return updatedFormData;
    });
    callback(formData);
  };
  const addMoreAchievements = () => {
    setFormData((prevData) => {
      const updatedFormData: Array<AchievementsInterface> = [
        ...prevData,
        { id: uuidv4(), name: "", description: "", date: "" },
      ];
      return updatedFormData;
    });
  };

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
              value={
                achievements.find(
                  (achievementItem) => achievementItem.id === achievement.id
                )?.name !== ""
                  ? achievements.find(
                      (achievementItem) => achievementItem.id === achievement.id
                    )?.name!
                  : achievement.name
              }
              changeHandler={(e) => changeEventHandler(e, index)}
            />
            <FormTextField
              placeholder="Describe your achievement..."
              value={
                achievements.find(
                  (achievementItem) => achievementItem.id === achievement.id
                )?.description !== "" ? achievements.find(
                  (achievementItem) => achievementItem.id === achievement.id
                )?.description! : achievement.description
              }
              name="description"
              label="Description"
              type="text"
              changeHandler={(e) => changeEventHandler(e, index)}
            />

            <FormTextField
              placeholder="Date of achievement..."
              value={
                achievements.find(
                  (achievementItem) => achievementItem.id === achievement.id
                )?.date !== "" ? achievements.find(
                  (achievementItem) => achievementItem.id === achievement.id
                )?.date! : achievement.date
              }
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
