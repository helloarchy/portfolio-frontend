import React, { useState } from "react";
import { useRouter } from "next/router";
import { IProject } from "../../../types/IProject";
import Layout from "../../../components/Layout";
import Date from "../../../components/date";
import { IProjectTechStack } from "../../../types/IProjectTechStack";

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.BACKEND_API}/projects/${params.id}`);
  const data = await res.json();

  return { props: { project: data as IProject } };
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
      {/* Body */}
      <article className={"divide-y pad-2 my-8"}>
        <header>
          <h1 className={"text-4xl"}>{project.title}</h1>
          <div className={"my-2 p-2"}>
            {project.date ? <Date dateString={project.date} /> : null}
          </div>
          <div className={"m-2 p-2"}>
            {/* Tech stack */}
            {project.techStack && false
              ? project.techStack.map((tech) => {
                  console.log("Tech is...");
                  console.log(tech);
                  console.log(`${IProjectTechStack[tech]}`);
                  return (
                    <button
                      key={`${tech}`}
                      className={
                        "py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                      }
                    >
                      {IProjectTechStack[tech]}
                    </button>
                  );
                })
              : null}
          </div>
        </header>

        <div className={"p-4 prose lg:prose-l"}>
          {project.bodyMarkdown ? (
            // <div dangerouslySetInnerHTML={{ __html: project.bodyMarkdown }} />
            <div>This is where the markdown rendered html will go</div>
          ) : (
            <div>Coming soon!</div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default ProjectPage;
