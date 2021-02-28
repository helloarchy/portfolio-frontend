import React from "react";
import { IProject } from "../types/IProject";
import ProjectCard from "./project-card";

type Props = {
  projects: Array<IProject>;
};

const ProjectGridList = ({ projects }: Props) => {
  return (
    <div className={"flex flex-wrap -mx-3 overflow-hidden"}>
      {/* Create a card for each project using the project data */}
      {projects.map((project: IProject) => (
        <div
          key={project._id}
          className={"my-3 px-3 w-1/3 overflow-hidden xl:w-1/3"}
        >
          <ProjectCard project={project} pageLink={`projects/${project._id}`} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGridList;
