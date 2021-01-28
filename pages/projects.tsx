import React from "react";
import TitleBar from "../components/title-bar";
import Link from "next/link";

export default function Projects({}: {}) {
  return (
    <div className={"grid grid-cols-5 gap-4"}>
      <div className={""}>Column 1: Projects filter</div>
      <div className={"col-span-3"}>
        {/* Project Grid List */}
        Column 2: Project card list
      </div>
      <div className={""}>Column 3: Side Nav</div>
    </div>
  );
}
