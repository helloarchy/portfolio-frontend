import React from "react";
import { GetStaticProps } from "next";

import { getSortedProjectData } from "../lib/projects-lib";
import ProjectGridList from "../components/project-grid-list";
import Layout from "../components/layout";

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

const left = <div className={""}>Column 1: Projects filter</div>;

const right = <div className={""}>Column 3: Side Nav</div>;

const Projects = ({ allProjectData }) => (
  <Layout left={left} right={right}>
    <ProjectGridList projects={allProjectData} />
  </Layout>
);

export default Projects;
