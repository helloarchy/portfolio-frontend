import mongoose, { Document, Schema } from "mongoose";
import { IProject } from "../interfaces/IProject";

/* ProjectSchema will correspond to a collection in your MongoDB database. */
const ProjectSchema: Schema = new Schema({
  title: {
    required: [true, "Please provide a title for this project."],
    type: String,
  },
  image_url: {
    type: String,
  },
});

export default mongoose.model<IProject>("Project", ProjectSchema);
