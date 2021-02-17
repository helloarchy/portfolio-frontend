import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

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
              <div className="grid grid-cols-6 gap-6">
                {/* Title */}
                <div className="col-span-6 sm:col-span-4">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className={
                      "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    }
                    maxLength={20}
                    name={"title"}
                    onChange={handleChange}
                    required={true}
                    type={"text"}
                    value={form.title}
                  />
                </div>

                {/* Date */}
                <div className={"col-span-6 sm:col-span-4"}>
                  <label
                    className={"block text-sm font-medium text-gray-700"}
                    htmlFor={"date"}
                  >
                    Date
                  </label>
                  <input
                    className={
                      "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    }
                    name={"date"}
                    onChange={handleChange}
                    type={"date"}
                    value={form.date}
                  />
                </div>

                {/* Image URL */}
                {/* Image Desc */}
                {/* Short Desc */}
                {/* Categories */}
                {/* Tech Stack */}
                {/* Content Markdown */}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country / Region
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
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

      <form id={formId} onSubmit={handleSubmit}>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
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
