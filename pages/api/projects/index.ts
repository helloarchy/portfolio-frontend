import dbConnect from "../../../utils/dbConnect";
import { ProjectModel } from "../../../models/Project";

export default async function handler(req, res) {
  const { method } = req;

  console.log("Trying to connect to db");
  await dbConnect();
  console.log("Connected!");

  switch (method) {
    case "GET":
      try {
        const projects = await ProjectModel.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: projects });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      console.log("Trying to post!");
      try {
        const project = await ProjectModel.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
