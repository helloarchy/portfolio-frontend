import React from "react";
import { IFormFieldType } from "../types/IFormFieldType";

type Props = {
  form?: string;
  formValue;
  handleChange;
  name: string;
  title: string;
  type: IFormFieldType;
};

const FormField = ({
  handleChange,
  form,
  formValue,
  name,
  title,
  type,
}: Props) => {
  let isTextArea: boolean = false;
  let rows: number = 0;
  switch (type) {
    case IFormFieldType.textAreaSmall:
      isTextArea = true;
      rows = 2;
      break;
    case IFormFieldType.textAreaMedium:
      isTextArea = true;
      rows = 3;
      break;
    case IFormFieldType.textAreaLarge:
      isTextArea = true;
      rows = 8;
      break;
  }

  if (isTextArea && !form)
    throw new Error("Form parameter is required for textarea");

  return (
    <label className={"block"} htmlFor={name}>
      <span className={"text-gray-700"}>{title}</span>
      {isTextArea ? (
        <textarea
          className={
            "mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
          }
          form={form}
          name={name}
          onChange={handleChange}
          rows={rows}
          value={formValue}
        />
      ) : (
        <input
          className={
            "mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
          }
          name={name}
          onChange={handleChange}
          type={type}
          value={formValue}
        />
      )}
    </label>
  );
};

export default FormField;
