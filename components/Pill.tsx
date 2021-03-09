import React from "react";

type Props = {
  value: string;
};

const Pill = ({ value }: Props) => {
  return (
    <button
      className={
        "py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
      }
    >
      {value}
    </button>
  );
};

export default Pill;
