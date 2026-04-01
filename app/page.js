import Navbar from "@/components/Navbar";
import Link from "next/link";
import CyberNetwork from "@/components/CyberNetwork";
import { certificates } from "@/lib/certificates";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white cyber-overlay">
        <CyberNetwork />

        {/* glow blobs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[120px] opacity-20"></div>

        {/* cyber grid */}
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto py-32 px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <p className="text-cyan-400 mb-4 tracking-widest text-sm">
              THREAT ANALYSIS • DIGITAL FORENSICS • SOC
            </p>

            <h1 className="text-4xl font-bold leading-tight">Utkarsh Pandey</h1>

            <p className="mt-6 text-slate-300 max-w-xl">
              I investigate network traffic, analyze cyber threats, perform
              digital forensics and build secure systems.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/blogs"
                className="px-8 py-4 bg-indigo-600 rounded-2xl shadow-lg hover:shadow-indigo-500/40 hover:scale-105 transition"
              >
                Read Writeups
              </Link>

              <a
                href="https://drive.google.com/file/d/1vT4qTcgpVbF_6PMKZPeN1Bf6q8Y2TavE/"
                target="_blank"
                className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/10 transition"
              >
                Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8">
            {/* CYBER CARD */}
            <div className="float bg-white/5 backdrop-blur border border-cyan-400/20 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10">
              <p className="text-cyan-400 text-sm mb-4">LIVE SECURITY STACK</p>

              <div className="space-y-3 text-slate-300">
                <p>• Packet Analysis → Wireshark</p>
                <p>• Recon → Nmap & OSINT</p>
                <p>• Malware Inspection → Sandbox</p>
                <p>• Log Monitoring → SIEM Concepts</p>
              </div>

              <div className="mt-6 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 w-[70%] animate-pulse"></div>
              </div>

              <p className="text-xs text-slate-400 mt-2">Skill Progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Cyber Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Network Security",
              "Wireshark Analysis",
              "Nmap",
              "OSINT",
              "Digital Forensics",
              "Linux",
              "Vulnerability Scanning",
              "Web Security",
            ].map((skill) => (
              <div
                key={skill}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Cyber Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://python14developers.pythonanywhere.com/"
              target="_blank"
              className="block border p-6 rounded-xl hover:border-cyan-400 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="font-semibold">Steganography Web App</h3>

              <p className="text-gray-500 mt-2">
                Hide data inside images using LSB technique.
              </p>

              <p className="text-cyan-400 text-sm mt-3">Live Demo →</p>
            </a>

            <a
              href="https://utkarshpandey.com/cybersecurity/reports/Report_SummerTraining.pdf"
              target="_blank"
              className="block border p-6 rounded-xl hover:border-cyan-400 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="font-semibold">Network Packet Analysis Labs</h3>

              <p className="text-gray-500 mt-2">
                Investigated suspicious traffic using Wireshark.
              </p>

              <p className="text-cyan-400 text-sm mt-3">View Report →</p>
            </a>

            <div className="border p-6 rounded-xl">
              <h3 className="font-semibold">Maze Solving Robot</h3>
              <p className="text-gray-500 mt-2">
                Autonomous logic + optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.image} // or cert.file if using PDFs
                target="_blank"
                className="group"
              >
                <div className="p-3 bg-slate-900 rounded-xl border border-cyan-400/20 hover:border-cyan-400 transition">
                  <img
                    src={cert.image}
                    className="w-full h-[280px] object-contain bg-indigo-800 rounded-lg group-hover:scale-105 transition"
                  />
                </div>

                <p className="mt-3 text-sm text-slate-300 text-center">
                  {cert.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="relative py-28 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
        {/* glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Support My Cybersecurity Journey ☕
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
            I actively research cyber threats, publish writeups and build
            security tools. If you find my work useful, you can support me.
          </p>

          <a
            href="https://paypal.me/UniqueUraniumXplorer"
            target="_blank"
            className="inline-block mt-10 px-10 py-4 rounded-2xl
      bg-gradient-to-r from-cyan-500 to-indigo-600
      shadow-xl shadow-cyan-500/30
      hover:scale-110 hover:shadow-cyan-400/50
      transition text-lg font-semibold"
          >
            ☕ Buy Me a Coffee
          </a>
        </div>
      </section>

      {/* BLOG CTA */}
      <section className="bg-indigo-600 text-white py-24 text-center">
        <h2 className="text-3xl font-bold">Read My Cybersecurity Writeups</h2>

        <Link
          href="/blogs"
          className="inline-block mt-6 px-8 py-3 bg-white text-indigo-600 rounded-xl"
        >
          Go to Blogs
        </Link>
      </section>
    </div>
  );
}
