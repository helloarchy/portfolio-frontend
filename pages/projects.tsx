import React from "react";
import Masonry from "react-masonry-css";

import Layout from "../components/Layout";
import ProjectCard from "../components/project-card";

import { IProject } from "../types/IProject";

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.BACKEND_API}/projects`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projects: data as Array<IProject>,
    }, // will be passed to the page component as props
  };
}

type Props = {
  projects: Array<IProject>;
};

const left = <div className={""}>Column 1: Projects filter</div>;
const right = <div className={""}>Column 3: Side Nav</div>;

const Projects = ({ projects }: Props) => {
  const breakpointColumnsObj = {
    default: 3,
    480: 1,
    768: 1,
    976: 2,
    1440: 3,
  };

  return (
    <Layout left={left} right={right}>
      {/* https://www.npmjs.com/package/react-masonry-css */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex"
        columnClassName=""
      >
        {/* Create a card for each project using the project data */}
        {projects.map((project: IProject) => (
          <ProjectCard
            key={project._id}
            project={project}
            pageLink={`projects/${project._id}`}
          />
        ))}
      </Masonry>
    </Layout>
  );
};

export default Projects;
