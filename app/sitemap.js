import { getAllBlogs } from "@/lib/blogs"

export default function sitemap() {
  const baseUrl = "https://cyber.utkarshpandey.com"

  const blogs = getAllBlogs()

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ]
}