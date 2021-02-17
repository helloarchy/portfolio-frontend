import { Document } from "mongoose";

export interface IProject extends Document {
  categories?: string[];
  contentHtml?: string;
  date?: string;
  imageAlt?: string;
  imageSrc?: string;
  shortDescription?: string;
  title: string; // Required
  techStack?: string[];
}
