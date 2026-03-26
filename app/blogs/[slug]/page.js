import { getBlogBySlug, getAllBlogs } from "@/lib/blogs"
import ReactMarkdown from "react-markdown"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }) {

  const { slug } = await params   // ⭐ Next 15 fix

  const blog = await getBlogBySlug(slug)

  if (!blog) {
    return {
      title: "Blog | CyberUtkarsh"
    }
  }

  return {
    title: `${blog.title} | CyberUtkarsh`,
    description: blog.excerpt,
    alternates: {
      canonical: `/blogs/${slug}`
    }
  }
}

export async function generateStaticParams(){
  const blogs = getAllBlogs()

  return blogs.map(blog => ({
    slug: blog.slug
  }))
}

export default async function BlogPage({ params }) {

  const { slug } = await params   // ⭐ IMPORTANT Next 15+

  const blog = await getBlogBySlug(slug)

  if (!blog) return notFound()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white px-6 py-20">

      <article className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          {blog.title}
        </h1>

        <p className="text-cyan-600 dark:text-cyan-400 text-sm mb-10">
          {blog.date}
        </p>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>
            {blog.content}
          </ReactMarkdown>
        </div>

      </article>

    </div>
  )
}