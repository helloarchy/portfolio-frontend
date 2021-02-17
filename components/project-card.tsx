import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { IProject } from "../types/IProject";

type Props = {
  project: IProject;
  pageLink: string;
};

const ProjectCard = ({ project, pageLink }: Props) => (
  <div
    key={project.title} // TODO: Use id from ProjectModel
    className={"m-2 bg-white shadow overflow-hidden sm:rounded-lg"}
  >
    <article className={"overflow-hidden rounded-lg shadow-lg"}>
      {/* Thumbnail */}
      <a href={pageLink}>
        {/* Get a random image */}
        <img
          alt={"Placeholder"}
          className={"block h-auto w-full"}
          src={"https://picsum.photos/600/400/?random"}
        />
      </a>

      {/* Title */}
      <header
        className={"flex items-center justify-between leading-tight p-2 md:p-2"}
      >
        <h1 className={"text-lg"}>
          <Link href={pageLink}>{project.title}</Link>
        </h1>
      </header>

      {/* Short Description */}
      <section className={"select-none px-2 max-w-xl"}>
        <p className={"text-grey-darker text-sm"}>{project.date}</p>
        <p className={"mt-2 text-gray-600"}>{project.shortDesc}</p>
      </section>

      {/* Tech Stack */}
      <section className={"p-2"}>
        <div className={"mx-2 p2 select-none flex"}>
          {project.techStack.map((tech) => (
            <button
              className={
                "py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
              }
            >
              {tech}
            </button>
          ))}
        </div>
      </section>

      <footer
        className={"flex justify-end items-center leading-none p-2 md:p-2"}
      >
        {/* More info button */}
        <Link href={pageLink}>
          <button
            type="button"
            className={
              "border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
            }
          >
            More info
          </button>
        </Link>
      </footer>
    </article>
  </div>
);

export default ProjectCard;
