import Form from "../components/Form";

const NewProject = () => {
  const projectForm = {
    name: "",
    image_url: "",
  };

  return <Form formId="add-project-form" projectForm={projectForm} />;
};

export default NewProject;
