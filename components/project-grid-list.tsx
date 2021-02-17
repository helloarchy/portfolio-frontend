import React from "react";
import { IProject } from "../interfaces/IProject";
import ProjectCard from "./project-card";

type Props = {
  projects: IProject[];
};

const ProjectGridList = ({ projects }: Props) => (
  <div className={"flex flex-wrap -mx-3 overflow-hidden"}>
    {/* Create a card for each project using the project data */}
    {projects.map((project) => (
      <div
        // key={project._id} // TODO: Use _id from ProjectModel
        className={"my-3 px-3 w-1/3 overflow-hidden xl:w-1/3"}
      >
        {/*<ProjectCard project={project} pageLink={`projects/${project._id}`} />*/}
        <ProjectCard project={project} pageLink={`projects/${project.title}`} />
      </div>
    ))}
  </div>
);

export default ProjectGridList;
