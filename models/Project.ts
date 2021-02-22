import mongoose, { Schema } from "mongoose";
import { IProject } from "../types/IProject";

/* ProjectSchema will correspond to a collection in your MongoDB database. */
const ProjectSchema = new Schema({
  categories: {
    type: [String],
  },
  bodyMarkdown: {
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
    type: [String],
  },
});

export default mongoose.model<IProject>("Project", ProjectSchema);
