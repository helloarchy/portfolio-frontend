import React from "react";
import Link from "next/link";

/**
 *
 * @param id
 * @param date
 * @param title
 * @param description
 * @param techStack
 * @param category
 * @param imageSrc
 * @param imageAlt
 * @constructor
 */
export default function ProjectCard(
  id: string,
  date: string,
  title: string,
  description: string,
  techStack: string[],
  category: string[],
  imageSrc: string,
  imageAlt: string
) {
  return (
    <div>
      <ul>
        {category.map((category) => {
          return <li>{category}</li>;
        })}
      </ul>
      <header>{title}</header>
      <p>{date}</p>
      <div>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <p>{description}</p>
      <ul>
        {techStack.map((technology) => {
          return <li>{technology}</li>;
        })}
      </ul>
      <Link href={`/projects/${id}`}>More info</Link>
    </div>
  );
}
