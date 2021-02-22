import React from "react";

type Props = {
  changeHandler;
  listName: string;
  title: string;
  value: string;
};

const CheckboxPill = ({ changeHandler, listName, title, value }: Props) => {
  return (
    <label className="inline-flex items-center border-2 rounded-full m-1 p-2">
      <input
        className="border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black rounded-full p-1.5"
        name={listName}
        onChange={changeHandler}
        type="checkbox"
        value={value}
      />
      <span className="ml-1 text-sm">{title}</span>
    </label>
  );
};

export default CheckboxPill;
