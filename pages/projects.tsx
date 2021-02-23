import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import ProjectGridList from "../components/project-grid-list";
import Layout from "../components/layout";

const left = <div className={""}>Column 1: Projects filter</div>;
const right = <div className={""}>Column 3: Side Nav</div>;
const fetcher = (url) => fetch(url).then((res) => res.json());

const Projects = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(`/api/projects`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout left={left} right={right}>
      <ProjectGridList projects={data.data} />
    </Layout>
  );
};

export default Projects;
