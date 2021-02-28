import { useRouter } from "next/router";
import useSWR from "swr";
import NewProjectForm from "../../../components/NewProjectForm";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditProject = () => {
  console.log("Trying to render the edit page for some reason?");
  const router = useRouter();
  const { id } = router.query;
  // https://www.npmjs.com/package/swr
  const { data: project, error } = useSWR(
    id ? `/api/projects/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!project) return <p>Loading...</p>;

  const projectForm = {
    name: project.name,
    image_src: project.image_url,
  };

  return (
    <NewProjectForm
      formId="edit-project-form"
      initialForm={projectForm}
      forNewProject={false}
    />
  );
};

export default EditProject;
