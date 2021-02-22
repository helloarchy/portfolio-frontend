import React from "react";
import { IFormFieldType } from "../types/IFormFieldType";
import CheckboxPill from "./CheckboxPill";
import { ICheckboxListItem } from "../types/ICheckboxListItem";

type Props = {
  checkboxList?: ICheckboxListItem[];
  formId?: string;
  formValue;
  handleChange;
  name: string;
  title: string;
  type: IFormFieldType;
};

const FormField = ({
  checkboxList,
  formId,
  formValue,
  handleChange,
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

  if (isTextArea) {
    if (!formId) throw new Error("Form parameter is required for textarea");
    return (
      <label className={"block"} htmlFor={name}>
        <span className={"text-gray-700"}>{title}</span>
        <textarea
          className={
            "mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
          }
          name={name}
          onChange={handleChange}
          rows={rows}
          value={formValue}
        />
      </label>
    );
  }

  if (type === IFormFieldType.checkboxList) {
    if (!checkboxList) throw new Error("Checkbox list requires a checkboxList");
    return (
      <label className={"block"}>
        <div className={"mb-1"}>
          <span className={"text-gray-700"}>{title}</span>
        </div>
        {checkboxList.map((checkboxItem) => {
          return (
            <CheckboxPill
              changeHandler={handleChange}
              key={checkboxItem.key}
              listName={checkboxItem.listName}
              title={checkboxItem.title}
              value={checkboxItem.value}
            />
          );
        })}
      </label>
    );
  }

  return (
    <label className={"block"} htmlFor={name}>
      <span className={"text-gray-700"}>{title}</span>
      <input
        className={
          "mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        }
        name={name}
        onChange={handleChange}
        type={type}
        value={formValue}
      />
    </label>
  );
};

export default FormField;
