import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

type Props = {};

const urlLinkedin = "https://www.linkedin.com/in/hardyrar/";

const Footer = ({}: Props) => (
  <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
      {/* Col 1 */}
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        {/* Col title */}
        <div className="font-serif text-xs uppercase text-gray-400 font-medium mb-6">
          My Works
        </div>

        {/* Links */}
        <a
          href="/projects"
          className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Projects
        </a>
      </div>

      {/* Col 2 */}
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        {/* Title */}
        <div className="font-serif text-xs uppercase text-gray-400 font-medium mb-6">
          Everything Else
        </div>

        {/* Links */}
        <a
          href="#"
          className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          About me
        </a>
        <a
          href="#"
          className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          CV
        </a>
        <a
          href="#"
          className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Contact
        </a>
      </div>
    </div>

    {/* Copyright */}
    <div className="pt-2">
      <div
        className="flex pb-5 px-3 m-auto pt-5
            border-t border-gray-500 text-gray-400 text-sm
            flex-col md:flex-row max-w-6xl"
      >
        <div className="mt-2">
          <span className={"font-serif text-xl"}>Archy.dev </span>
          <span className={"font-sans text-sm"}> by Robert Hardy</span>
        </div>

        {/* Icons */}
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href={urlLinkedin} className="w-6 mx-1">
            <p>Linkedin</p>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
