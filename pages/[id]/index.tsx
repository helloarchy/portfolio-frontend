import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dbConnect from "../../utils/dbConnect";
import { ProjectModel } from "../../models/Project";

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
    <div key={project._id}>
      <div className="card">
        <img src={project.image_url} alt={"project pic"} />
        <h5 className="project-name">{project.name}</h5>
        <div className="main-content">
          <p className="project-name">{project.name}</p>
          <p className="owner">Owner: {project.owner_name}</p>

          <div className="likes info">
            <p className="label">Likes</p>
            <ul>
              {project.likes.map((data, index) => (
                <li key={index}>{data} </li>
              ))}
            </ul>
          </div>
          <div className="dislikes info">
            <p className="label">Dislikes</p>
            <ul>
              {project.dislikes.map((data, index) => (
                <li key={index}>{data} </li>
              ))}
            </ul>
          </div>

          <div className="btn-container">
            <Link href={"/[id]/edit"} as={`/${project._id}/edit`}>
              <button className="btn edit">Edit</button>
            </Link>
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const project = await ProjectModel.findById(params.id).lean();
  project._id = project._id.toString();

  return { props: { project } };
}

export default ProjectPage;
