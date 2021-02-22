import NewProjectForm from "../../components/NewProjectForm";
import Layout from "../../components/layout";

const projectForm = {
  categories: [],
  bodyMarkdown: "",
  date: "",
  imageDesc: "",
  imageUrl: "",
  shortDesc: "For the project card...",
  techStack: [],
  title: "",
};

const NewProject = () => (
  <Layout pageTitle={"New Project"}>
    <NewProjectForm formId="add-project-form" projectForm={projectForm} />
  </Layout>
);

export default NewProject;
