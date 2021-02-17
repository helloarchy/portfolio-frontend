import mongoose, { Schema } from "mongoose";
import { IProject } from "../types/IProject";
import { IProjectCategory } from "../types/IProjectCategory";
import { IProjectTechStack } from "../types/IProjectTechStack";

const categoriesSchema = new Schema({
  category: IProjectCategory,
});

const techStackSchema = new Schema({
  tech: IProjectTechStack,
});

/* ProjectSchema will correspond to a collection in your MongoDB database. */
const ProjectSchema: Schema = new Schema({
  categories: {
    type: [categoriesSchema],
  },
  contentMarkdown: {
    type: String,
  },
  date: {
    type: Date,
  },
  imageDesc: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  shortDesc: {
    type: String,
  },
  title: {
    required: [true, "Please provide a title for this project."],
    type: String,
  },
  techStack: {
    type: [techStackSchema],
  },
});

export default mongoose.model<IProject>("Project", ProjectSchema);
