import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dbConnect from "../../utils/dbConnect";
import Project from "../../models/Project";
import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";

/* Allows you to view project card info and delete project card*/
const ProjectPage = ({ project }) => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const handleDelete = async () => {
    const projectID = router.query.id;

    try {
      await fetch(`/api/projects/${projectID}`, {
        method: "Delete",
      });
      await router.push("/");
    } catch (error) {
      setMessage("Failed to delete the project.");
    }
  };

  return (
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
                key={tech}
                className={
                  "py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                }
              >
                {tech}
              </button>
            ))}
          </div>
        </header>

        {/*<div className={"p-4 prose lg:prose-xl"}>*/}
        <div className={"p-4 prose lg:prose-l"}>
          <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
        </div>
      </article>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const project = await Project.findById(params.id).lean();
  project._id = project._id.toString();

  return { props: { project } };
}

export default ProjectPage;
