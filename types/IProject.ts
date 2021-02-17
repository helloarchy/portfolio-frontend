import { Document } from "mongoose";
import { IProjectCategory } from "./IProjectCategory";
import { IProjectTechStack } from "./IProjectTechStack";

export interface IProject extends Document {
  categories?: IProjectCategory[];
  contentHtml?: string;
  date?: string;
  imageDesc?: string;
  imageUrl?: string;
  shortDesc?: string;
  title: string; // Required
  techStack?: IProjectTechStack[];
}
