import fs from "fs"
import path from "path"
import matter from "gray-matter"

const blogsDirectory = path.join(process.cwd(), "content/blogs")

export function getAllBlogs() {

  const files = fs.readdirSync(blogsDirectory)

  return files.map(file => {
    const slug = file.replace(".md", "")

    const fullPath = path.join(blogsDirectory, file)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description
    }
  })
}

export async function getBlogBySlug(slug) {

  const fullPath = path.join(blogsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { data, content } = matter(fileContents)

  return {
    slug,
    ...data,
    content
  }
}