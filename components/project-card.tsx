import React from "react";
import Link from "next/link";

type ProjectData = {
  id: string;
  date: string;
  title: string;
  description: string;
  techStack: string[];
  categories: string[];
  imageSrc: string;
  imageAlt: string;
};

type Props = {
  projectData: ProjectData;
};

const ProjectCard = ({ projectData }: Props) => (
  <div>
    <ul>
      {projectData.categories.map((category) => {
        return <li>{category}</li>;
      })}
    </ul>
    <header>{projectData.title}</header>
    <p>{projectData.date}</p>
    <div>
      <img src={projectData.imageSrc} alt={projectData.imageAlt} />
    </div>
    <p>{projectData.description}</p>
    <ul>
      {projectData.techStack.map((technology) => {
        return <li>{technology}</li>;
      })}
    </ul>
    <Link href={`/projects/${projectData.id}`}>More info</Link>
  </div>
);

export default ProjectCard;
