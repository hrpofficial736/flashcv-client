import React from "react";

interface FormTextFieldProps {
  name: string;
  value: string;
  label: string;
  placeholder: string;
  type: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  value,
  label,
  placeholder,
  type,
  changeHandler,
}) => {
  return (
    <div>
      <p className="text-sm font-semibold font-poppins">{label}</p>
      <input
        name={name}
        value={value}
        className="px-2 py-2 border border-zinc-400 w-full rounded-xl text-black/60 font-poppins"
        type={type}
        placeholder={placeholder}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};
