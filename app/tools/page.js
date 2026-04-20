import Navbar from "@/components/Navbar"
import UrlScanner from "@/components/tools/UrlScanner"
import EmailPlus from "@/components/tools/EmailPlus"
import PhishSense from "@/components/tools/PhishSense"

export const metadata = {
  title: "Cyber Tools | Cyber.UtkarshPandey"
}

export default function Tools(){
  return(
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar/>

      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-2">
          Cyber Toolkit
        </h1>

        <p className="text-slate-400 mb-10">
          Quick security utilities and custom-built tools for practical cybersecurity analysis.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* QuickCheck */}
          <UrlScanner/>

          {/* Our Tool 1 */}
          <EmailPlus/>

          {/* Our Tool 2 */}
          <PhishSense/>

        </div>

      </div>
    </div>
  )
}