import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../components/Form";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditProject = () => {
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
    <Form
      formId="edit-project-form"
      projectForm={projectForm}
      forNewProject={false}
    />
  );
};

export default EditProject;
