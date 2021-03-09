import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export async function mdToHtml(markdown: string) {
  // Use gray-matter to parse the project metadata section
  const matterResult = matter(markdown);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  return processedContent.toString();
}
