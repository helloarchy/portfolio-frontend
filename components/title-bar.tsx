import React from "react";

const title = "Portfolio";

export default function TitleBar({}: {}) {
  return (
    <div>
      <header className={"text-5xl font-serif capitalize"}>{title}</header>
    </div>
  );
}
