import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const NavLink = (props) => {
  const active = props.router.pathname === props.path ? "active" : "";
  const defaultIcon = <FontAwesomeIcon icon={faAngleRight} />;
  return (
    <li className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-r-4 border-transparent hover:border-indigo-500 pr-6">
      <Link href={props.path}>
        <a>
          {props.icon || defaultIcon}
          <span className="ml-2 text-sm tracking-wide truncate">
            {props.label}
          </span>
        </a>
      </Link>
    </li>
  );
};

export default withRouter(NavLink);
