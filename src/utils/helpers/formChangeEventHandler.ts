import React from "react";

export default async function changeEventHandler<
  T extends Record<string, unknown>,
>(
  setFormData: React.Dispatch<React.SetStateAction<T>>,
  e: React.ChangeEvent<HTMLInputElement>,
) {
  const { name, value } = e.target;
  setFormData((prevData) => {
    const updatedFormData = { ...prevData, [name]: value };
    return updatedFormData;
  });
}
