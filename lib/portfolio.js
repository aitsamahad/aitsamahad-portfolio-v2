import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
// import fetch from "node-fetch"; // For External API or Database Query

const portfolioDirectory = path.join(process.cwd(), "portfolio");

export function getSortedPortfolioData() {
  // Get file names under /Portfolio
  const fileNames = fs.readdirSync(portfolioDirectory);
  const allPortfolioData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(portfolioDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the Portfolio metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort Portfolio by date
  return allPortfolioData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// For External API or Database Query
// export async function getSortedPortfolioData() {
//     // Instead of the file system,
//     // fetch Portfolio data from an external API endpoint
//     const res = await fetch('..')
//     return res.json()
//   }

// This will return the list of file names (excluding .md) in the Portfolio directory
export function getAllPortfolioIds() {
  const fileNames = fs.readdirSync(portfolioDirectory);

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

// We need to fetch necessary data to render the Portfolio with the given id.
// This will return the Portfolio data based on id:
export async function getPortfolioData(id) {
  const fullPath = path.join(portfolioDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the Portfolio metadata section
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
