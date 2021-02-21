import React from "react";

type Props = {
  changeHandler;
  title: string;
};

const CheckboxPill = ({ title, changeHandler }: Props) => {
  return (
    <label className="inline-flex items-center border-2 rounded-full m-1 p-2">
      <input
        type="checkbox"
        onChange={changeHandler}
        className="border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black rounded-full p-1.5"
      />
      <span className="ml-1 text-sm">{title}</span>
    </label>
  );
};

export default CheckboxPill;
