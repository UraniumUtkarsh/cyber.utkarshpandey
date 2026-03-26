"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar(){

  const [open,setOpen] = useState(false)

  return(
    <nav className="sticky top-0 z-[9999]">

      {/* gradient cyber bar */}
      <div className="bg-gradient-to-r from-indigo-800 via-purple-800 to-cyan-600 shadow-xl shadow-cyan-500/30">

        <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">

          {/* LOGO */}
          <Link href="/" className="font-bold text-lg tracking-wider hover:scale-105 transition">
            Cyber.UtkarshPandey
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm">

            <Link href="/" className="hover:text-cyan-200 transition">Home</Link>
            <Link href="/blogs" className="hover:text-cyan-200 transition">Blogs</Link>
            <Link href="/tools" className="hover:text-cyan-200 transition">Tools</Link>

            <a href="https://utkarshpandey.com" target="_blank" className="hover:text-cyan-200 transition">
              Dashboard
            </a>

            <a href="https://utkarshpandey.com/socials" target="_blank" className="hover:text-cyan-200 transition">
              Socials
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={()=>setOpen(!open)}
            className="md:hidden text-3xl active:scale-90 transition"
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full bg-slate-950 text-white border-b border-cyan-500/30 shadow-2xl transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >

        <div className="flex flex-col p-6 gap-6 text-lg">

          <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link href="/blogs" onClick={()=>setOpen(false)}>Blogs</Link>
          <Link href="/tools" onClick={()=>setOpen(false)}>Tools</Link>

          <a href="https://utkarshpandey.com" target="_blank" onClick={()=>setOpen(false)}>
            Dashboard
          </a>

          <a href="https://utkarshpandey.com/socials" target="_blank" onClick={()=>setOpen(false)}>
            Socials
          </a>

        </div>

      </div>

    </nav>
  )
}