import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { getAllProjectIds, getProjectData } from "../../lib/projects-lib";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { Project as ProjectType } from "../../interfaces";
import React from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await getProjectData(params.id as string);
  return {
    props: {
      project,
    },
  };
};

type Props = {
  project: ProjectType;
};

/**
 * Generic Template for a project
 * @param projectData
 * @constructor
 */
const Project = ({ project }: Props) => (
  <Layout>
    <Head>
      <title>{project.title}</title>
    </Head>

    {/* Body */}
    <article className={"divide-y pad-2 my-8"}>
      <header>
        <h1 className={"text-4xl"}>{project.title}</h1>
        <div className={"my-2 p-2"}>
          <Date dateString={project.date} />
        </div>
        <div className={"m-2 p-2"}>
          {/* Tech stack */}
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
      </header>

      <div className={"p-4"}>
        <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
      </div>
    </article>
  </Layout>
);

export default Project;
