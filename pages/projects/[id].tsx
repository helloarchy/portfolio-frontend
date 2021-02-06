import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { getAllProjectIds, getProjectData } from "../../lib/projects-lib";
import Layout from "../../components/layout";
import Date from "../../components/date";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = await getProjectData(params.id as string);
  return {
    props: {
      projectData,
    },
  };
};

/**
 * Generic Template for a project
 * @param projectData
 * @constructor
 */
const Project = ({ projectData }) => (
  <Layout>
    <Head>
      <title>{projectData.title}</title>
    </Head>
    <article>
      <h1 className={""}>{projectData.title}</h1>
      <div className={""}>
        <Date dateString={projectData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
    </article>
    <footer></footer>
  </Layout>
);

export default Project;
