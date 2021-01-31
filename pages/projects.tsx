import React from "react";
import { GetStaticProps } from "next";

import { getSortedProjectData } from "../lib/projects-lib";
import ProjectCard from "../components/project-card";

/**
 *
 * @param context
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const allProjectData = getSortedProjectData();
  return {
    props: {
      allProjectData,
    },
  };
};

const Projects = ({ allProjectData }) => (
  <div className={"grid grid-cols-5 gap-4"}>
    <div className={""}>Column 1: Projects filter</div>
    <div className={"col-span-3"}>
      {/* Project Grid List */}
      Column 2: Project card list
      {/* Create a card for each project using the project data */}
      {allProjectData.map((projectData) => (
        <ProjectCard projectData={projectData} />
      ))}
    </div>
    <div className={""}>Column 3: Side Nav</div>
  </div>
);

export default Projects;
