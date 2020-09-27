import matter from "gray-matter";
import marked from "marked";
import yaml from "js-yaml";

export async function getAllPosts() {
  const context = require.context("../_scraps", false, /\.md$/);
  const posts = [];
  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../_scraps/${post}`);
    const meta = matter(content.default);
    posts.push({
      slug: post.replace(".md", ""),
      title: meta.data.title,
    });
  }
  return posts;
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../_scraps/${slug}.md`);
  const meta = matter(fileContent.default);
  const content = marked(meta.content);
  return {
    title: meta.data.title,
    content: content,
  };
}

export async function getConfig() {
  const config = await import(`../config.yml`);
  return yaml.safeLoad(config.default);
}
