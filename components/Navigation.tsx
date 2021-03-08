import NavLink from "./NavLink";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const navLinks = [
    {
      label: "Projects",
      path: "/projects",
      icon: <FontAwesomeIcon icon={faGripVertical} />,
    },
    {
      label: "About Me",
      path: "/about",
      icon: "",
    },
    {
      label: "Contact",
      path: "/contact",
      icon: "",
    },
  ];

  return (
    <div className="fixed flex flex-col w-64 bg-white h-full border-r">
      <div className={"flex items-center justify-center h-14 border-b"}>
        Navigation
      </div>
      <div className={"overflow-y-auto overflow-x-hidden flex-grow"}>
        <ul className={"flex flex-col py-4 space-y-1"}>
          {navLinks.map((nav) => (
            <NavLink
              key={nav.path}
              path={nav.path}
              label={nav.label}
              icon={nav.icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
