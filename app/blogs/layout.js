import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function BlogsLayout({ children }) {

  return (
    <div className="bg-slate-950 text-white min-h-screen flex flex-col">

      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* BLOG CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/20 mt-20">

        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">

          <div>
            <h3 className="font-bold text-lg">CyberUtkarsh</h3>
            <p className="text-slate-400 text-sm mt-2">
              Cybersecurity research, digital forensics insights,
              network analysis writeups and SOC learning journey.
            </p>
          </div>

          <div>
            <h4 className="text-cyan-400 mb-3">Explore</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/">Home</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/tools">Tools</Link>
            </div>
          </div>

          <div>
            <h4 className="text-cyan-400 mb-3">Main Portfolio</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="https://utkarshpandey.com" target="_blank">Dashboard</a>
              <a href="https://utkarshpandey.com/socials" target="_blank">Socials</a>
            </div>
          </div>

        </div>

        <div className="text-center text-xs text-slate-500 pb-6">
          © {new Date().getFullYear()} Utkarsh Pandey • Cybersecurity Portfolio
        </div>

      </footer>

    </div>
  )
}