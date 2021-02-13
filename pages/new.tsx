import Form from "../components/Form";

const projectForm = {
  name: "",
  image_src: "",
};

const NewProject = () => (
  <Form formId="add-project-form" projectForm={projectForm} />
);

export default NewProject;
