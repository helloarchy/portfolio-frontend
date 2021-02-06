import React from "react";
import { Project } from "../interfaces";
import ProjectCard from "./project-card";

type Props = {
  projects: Project[];
};

const ProjectGridList = ({ projects }: Props) => (
  <div className={"flex flex-wrap -mx-3 overflow-hidden"}>
    {/* Create a card for each project using the project data */}
    {projects.map((project) => (
      <div
        key={project.id}
        className={"my-3 px-3 w-1/3 overflow-hidden xl:w-1/3"}
      >
        <ProjectCard project={project} pageLink={`projects/${project.id}`} />
      </div>
    ))}
  </div>
);

export default ProjectGridList;
