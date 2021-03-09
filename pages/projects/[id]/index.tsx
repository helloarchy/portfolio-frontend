import React, { useState } from "react";
import { useRouter } from "next/router";
import { IProject } from "../../../types/IProject";
import Layout from "../../../components/Layout";
import Date from "../../../components/date";
import { IProjectTechStack } from "../../../types/IProjectTechStack";
import { mdToHtml } from "../../../lib/projects-lib";
import Pill from "../../../components/Pill";
import { IProjectCategory } from "../../../types/IProjectCategory";

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.BACKEND_API}/projects/${params.id}`);
  const data = await res.json();
  const project = data as IProject;

  /* Convert markdown to html */
  project.bodyHtml = await mdToHtml(project.bodyMarkdown);

  return {
    props: {
      project,
    },
  };
}

type Props = {
  project: IProject;
};

const ProjectPage = ({ project }: Props) => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  // Delete
  const handleDelete = async () => {
    const projectID = router.query.id;
    try {
      await fetch(`${process.env.BACKEND_API}/projects/${projectID}`, {
        method: "Delete",
      });
      await router.push("/");
    } catch (error) {
      setMessage("Failed to delete the project.");
    }
  };

  return (
    <Layout pageTitle={project.title ? project.title : "Project"}>
      <article className={"divide-y pad-2 my-8"}>
        {/* Top Matter */}
        <header>
          {/* Title */}
          <h1 className={"text-4xl"}>{project.title}</h1>

          {/* Date */}
          <div className={"my-2 p-2"}>
            {project.date ? <Date dateString={project.date} /> : null}
          </div>

          {/* Categories */}
          <h2 className={"text-xl font-serif"}>Categories</h2>
          <div className={"m-2 p-2"}>
            {project.categories
              ? project.categories.map((category) => {
                  return (
                    <Pill
                      key={`${category}`}
                      value={IProjectCategory[category]}
                    />
                  );
                })
              : null}
          </div>

          {/* Tech stack */}
          <h2 className={"text-xl font-serif"}>Tech Stack</h2>
          <div className={"m-2 p-2"}>
            {project.techStack
              ? project.techStack.map((tech) => {
                  return (
                    <Pill key={`${tech}`} value={IProjectTechStack[tech]} />
                  );
                })
              : null}
          </div>
        </header>

        {/* Body */}
        {project.bodyHtml ? (
          <div
            className={"p-4 prose lg:prose-l"}
            dangerouslySetInnerHTML={{ __html: project.bodyHtml }}
          />
        ) : (
          <div>Coming soon!</div>
        )}
      </article>
    </Layout>
  );
};

export default ProjectPage;
