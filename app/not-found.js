import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="text-center max-w-xl">

        <h1 className="text-7xl font-bold text-cyan-400">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-6">
          Page Not Found
        </h2>

        <p className="text-slate-400 mt-6">
          The page you are trying to access does not exist,
          may have been moved, or the link might be incorrect.
          Meanwhile, you can explore my cybersecurity research,
          projects, and threat analysis writeups.
        </p>

        <div className="mt-10 flex gap-4 justify-center flex-wrap">

          <Link
            href="/"
            className="px-6 py-3 bg-cyan-500 rounded-xl hover:bg-cyan-400 transition"
          >
            Go to Home
          </Link>

          <Link
            href="/blogs"
            className="px-6 py-3 border border-cyan-400 rounded-xl hover:bg-white/10 transition"
          >
            Read Cyber Blogs
          </Link>

          <a
            href="https://utkarshpandey.com"
            target="_blank"
            className="px-6 py-3 border border-indigo-400 rounded-xl hover:bg-white/10 transition"
          >
            Dashboard
          </a>

        </div>

        <p className="text-xs text-slate-500 mt-10">
          Utkarsh Pandey • Cybersecurity Portfolio • Cyber.UtkarshPandey.com
        </p>

      </div>

    </div>
  )
}