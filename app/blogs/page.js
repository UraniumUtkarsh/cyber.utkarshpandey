import Link from "next/link"
import { getAllBlogs } from "@/lib/blogs"

export const metadata = {
  title: "Cyber Writeups | Utkarsh Pandey"
}

export default function BlogsPage(){

  const blogs = getAllBlogs()
  

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">
      
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-12">
          Cybersecurity Writeups
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {blogs.map(blog => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="p-6 bg-white/5 border border-cyan-400/20 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {blog.title}
              </h2>

              <p className="text-slate-400 text-sm">
                {blog.description}
              </p>

              <p className="text-cyan-400 text-xs mt-4">
                {blog.date}
              </p>
            </Link>
          ))}

        </div>

      </div>

    </div>
  )
}