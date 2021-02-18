import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import { IProjectCategory } from "../types/IProjectCategory";

type Props = {
  formId?: string;
  projectForm?: any;
  forNewProject?: boolean;
};

const NewProjectForm = ({
  formId,
  projectForm,
  forNewProject = true,
}: Props) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    categories: projectForm.categories,
    contentMarkdown: projectForm.contentMarkdown,
    date: projectForm.date,
    imageDesc: projectForm.imageDesc,
    imageUrl: projectForm.imageSrc,
    shortDescription: projectForm.shortDescription,
    techStack: projectForm.techStack,
    title: projectForm.title,
  });

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
      await router.push("/");
    } catch (error) {
      setMessage("Failed to update project");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
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

      router.push("/");
    } catch (error) {
      setMessage("Failed to add project");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value =
      target.name === "poddy_trained" ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    console.log("Validated");
    if (Object.keys(errs).length === 0) {
      console.log("Trying to add");
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
                <label className="block" htmlFor="title">
                  <span className={"text-gray-700"}>Title</span>
                  <input
                    className={
                      "mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                    }
                    maxLength={20}
                    name={"title"}
                    onChange={handleChange}
                    required={true}
                    type={"text"}
                    value={form.title}
                  />
                </label>

                {/* Date */}
                <label className={"block"} htmlFor={"date"}>
                  <span className={"text-gray-700"}>Date</span>
                  <input
                    className={
                      "mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                    }
                    name={"date"}
                    onChange={handleChange}
                    type={"date"}
                    value={form.date}
                  />
                </label>

                {/* Image URL */}
                {/* Image Desc */}
                {/* Short Desc */}
                {/* Categories */}
                {/* Tech Stack */}
                {/* Content Markdown */}

                <div className={"block"}>
                  <div className={"mb-1"}>
                    <span className={"text-gray-700"}>Categories</span>
                  </div>
                  {Object.keys(IProjectCategory).map((category) => {
                    return (
                      <label className="inline-flex items-center border-2 rounded-full m-1 p-2">
                        <input
                          type="checkbox"
                          onChange={handleChange}
                          className="border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black rounded-full p-1.5"
                        />
                        <span className="ml-1 text-sm">
                          {IProjectCategory[category]}
                        </span>
                      </label>
                    );
                  })}
                </div>
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
