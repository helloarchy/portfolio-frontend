import React from "react";
import { useRouter } from "next/router";

import ProjectGridList from "../components/project-grid-list";
import Layout from "../components/layout";
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
  const { query } = useRouter();

  return (
    <Layout left={left} right={right}>
      <ProjectGridList projects={projects} />
    </Layout>
  );
};

export default Projects;
