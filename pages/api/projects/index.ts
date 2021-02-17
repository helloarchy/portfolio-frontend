import dbConnect from "../../../utils/dbConnect";
import Project from "../../../models/Project";

import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  console.log("Trying to connect to db");
  await dbConnect();
  console.log("Connected!");

  switch (method) {
    case "GET":
      try {
        const projects = await Project.find(
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
        const project = await Project.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: project });
        console.log("Posted");
      } catch (error) {
        res.status(400).json({ success: false });
        console.log("Failed");
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
