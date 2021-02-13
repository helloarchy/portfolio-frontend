import { prop, getModelForClass } from "@typegoose/typegoose";
import * as mongoose from "mongoose";

export class Project {
  @prop()
  public categories: string[];

  @prop()
  public contentHtml: string;

  @prop()
  public date: string;

  @prop()
  public imageAlt: string;

  @prop()
  public imageSrc: string;

  @prop()
  public shortDescription: string;

  @prop()
  public title: string;

  @prop()
  public techStack: string[];
}

export const ProjectModel = getModelForClass(Project);
