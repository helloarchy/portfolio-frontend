import React from "react";

type Props = {
  title?: string;
};

const TitleBar = ({ title = "Portfolio" }: Props) => (
  <div>
    <header className={"text-5xl font-serif capitalize"}>{title}</header>
  </div>
);

export default TitleBar;
