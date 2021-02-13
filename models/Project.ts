import mongoose from "mongoose";

/* ProjectSchema will correspond to a collection in your MongoDB database. */
const ProjectSchema = new mongoose.Schema({
  image_url: {
    /* Url to project image */
    required: [true, "Please provide an image url for this project."],
    type: String,
  },
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
