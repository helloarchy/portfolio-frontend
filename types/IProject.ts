import { Document } from "mongoose";
import { IProjectCategory } from "./IProjectCategory";
import { IProjectTechStack } from "./IProjectTechStack";

export interface IProject extends Document {
  bodyHtml?: string; // Populated dynamically from bodyMarkdown
  bodyMarkdown?: string;
  categories?: IProjectCategory[];
  date?: string;
  imageDesc?: string;
  imageUrl?: string;
  shortDesc?: string;
  techStack?: IProjectTechStack[];
  title: string; // Required
}
