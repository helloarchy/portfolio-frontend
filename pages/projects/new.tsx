import NewProjectForm from "../../components/NewProjectForm";
import Layout from "../../components/Layout";

const projectForm = {
  bodyMarkdown: "The markdown for the full project page...",
  categories: [],
  date: "",
  imageDesc: "An image of...",
  imageUrl: "",
  shortDesc: "For the project card...",
  techStack: [],
  title: "",
};

const NewProject = () => (
  <Layout pageTitle={"New Project"}>
    <NewProjectForm formId="add-project-form" initialForm={projectForm} />
  </Layout>
);

export default NewProject;
