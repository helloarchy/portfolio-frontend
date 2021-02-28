import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

import { IProjectCategory } from "../types/IProjectCategory";
import { IFormFieldType } from "../types/IFormFieldType";

import FormField from "./FormField";
import { ICheckboxListItem } from "../types/ICheckboxListItem";
import { IProjectTechStack } from "../types/IProjectTechStack";

type Props = {
  formId?: string;
  initialForm?: any;
  forNewProject?: boolean;
};

const NewProjectForm = ({
  formId,
  initialForm,
  forNewProject = true,
}: Props) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const categoryCheckboxList: ICheckboxListItem[] = [];
  Object.keys(IProjectCategory).forEach((category) => {
    categoryCheckboxList.push({
      key: category,
      listName: "categories",
      title: IProjectCategory[category],
      value: category,
    });
  });

  const techStackCheckboxList: ICheckboxListItem[] = [];
  Object.keys(IProjectTechStack).forEach((tech) => {
    techStackCheckboxList.push({
      key: tech,
      listName: "techStack",
      title: IProjectTechStack[tech],
      value: tech,
    });
  });

  const [form, setForm] = useState({
    bodyMarkdown: initialForm.bodyMarkdown,
    categories: initialForm.categories,
    date: initialForm.date,
    imageDesc: initialForm.imageDesc,
    imageUrl: initialForm.imageUrl,
    shortDesc: initialForm.shortDesc,
    techStack: initialForm.techStack,
    title: initialForm.title,
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (Array.isArray(form[name])) {
      if (form[name].includes(target.value)) {
        setForm((oldForm) => ({
          ...oldForm,
          [name]: oldForm[name].splice(`${target.value}`, 1),
        }));
      } else {
        setForm((oldForm) => ({
          ...oldForm,
          [name]: oldForm[name].concat(`${target.value}`),
        }));
      }
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status.toString());
      }

      const { data } = await res.json();

      // Update the local data without a revalidation
      await mutate(`/api/projects/${id}`, data, false);
      await router.push("/projects");
    } catch (error) {
      setMessage("Failed to update project");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    console.log("Trying to post!");
    console.log(`${process.env.BACKEND_API}/projects`);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status.toString());
      }

      await router.push("/projects");
    } catch (error) {
      setMessage("Failed to add project");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewProject ? postData(form) : putData(form);
    } else {
      console.log("Failed validation");
      setErrors({ errs });
    }
  };

  /* Makes sure project info is filled for project title */
  const formValidate = () => {
    let err: any = {};
    if (!form.title) err.name = "Name is required";
    return err;
  };

  return (
    <>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form id={formId} onSubmit={handleSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Title */}
                <FormField
                  formValue={form.title}
                  handleChange={handleChange}
                  name={"title"}
                  title={"Title"}
                  type={IFormFieldType.text}
                />

                {/* Date */}
                <FormField
                  formValue={form.date}
                  handleChange={handleChange}
                  name={"date"}
                  title={"Date"}
                  type={IFormFieldType.date}
                />

                {/* Image URL */}
                <FormField
                  formValue={form.imageUrl}
                  handleChange={handleChange}
                  name={"imageUrl"}
                  title={"Image URL"}
                  type={IFormFieldType.url}
                />

                {/* Image Desc */}
                <FormField
                  formValue={form.imageDesc}
                  handleChange={handleChange}
                  name={"imageDesc"}
                  title={"Image Description"}
                  type={IFormFieldType.text}
                />

                {/* Short Desc */}
                <FormField
                  formId={formId}
                  formValue={form.shortDesc}
                  handleChange={handleChange}
                  name={"shortDesc"}
                  title={"Short Project Description"}
                  type={IFormFieldType.textAreaMedium}
                />

                {/* Categories */}
                <FormField
                  checkboxList={categoryCheckboxList}
                  formValue={form.categories}
                  handleChange={handleChange}
                  name={"categories"}
                  title={"Categories"}
                  type={IFormFieldType.checkboxList}
                />

                {/* Tech Stack */}
                <FormField
                  checkboxList={techStackCheckboxList}
                  formValue={form.techStack}
                  handleChange={handleChange}
                  name={"techStack"}
                  title={"Tech Stack"}
                  type={IFormFieldType.checkboxList}
                />

                {/* Content Markdown */}
                <FormField
                  formId={formId}
                  formValue={form.bodyMarkdown}
                  handleChange={handleChange}
                  name={"bodyMarkdown"}
                  title={"Markdown Content"}
                  type={IFormFieldType.textAreaLarge}
                />
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Project
              </button>
            </div>
          </div>
        </form>
      </div>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default NewProjectForm;
