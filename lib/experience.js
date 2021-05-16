import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
// import fetch from "node-fetch"; // For External API or Database Query

const experienceDirectory = path.join(process.cwd(), "experience");

export function getSortedExperienceData() {
  // Get file names under /experience
  const fileNames = fs.readdirSync(experienceDirectory);
  const allExperienceData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(experienceDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the experience metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      content: matterResult.content,
    };
  });
  // Sort experience by date
  return allExperienceData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// For External API or Database Query
// export async function getSortedexperienceData() {
//     // Instead of the file system,
//     // fetch experience data from an external API endpoint
//     const res = await fetch('..')
//     return res.json()
//   }

// This will return the list of file names (excluding .md) in the experience directory
export function getAllExperienceIds() {
  const fileNames = fs.readdirSync(experienceDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// We need to fetch necessary data to render the experience with the given id.
// This will return the experience data based on id:
export async function getExperienceData(id) {
  const fullPath = path.join(experienceDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the experience metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
