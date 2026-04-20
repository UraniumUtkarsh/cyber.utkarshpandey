"use client"
import { useState } from "react"

export default function PhishSense() {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const analyze = async () => {
    if (!text.trim()) return

    setLoading(true)
    setResult("")
    setError("")

    try {
      const res = await fetch("/api/phishing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      })

      // ✅ Handle 404 / server errors safely
      if (!res.ok) {
        throw new Error("API route not working")
      }

      const data = await res.json()

      if (data.error) {
        setError("AI analysis failed")
      } else {
        setResult(data.result)
      }

    } catch (err) {
      console.error(err)
      setError("Something went wrong. Check API route or key.")
    }

    setLoading(false)
  }

  // 🔥 Extract risk level from AI text
  const getRiskLevel = () => {
    const lower = result.toLowerCase()

    if (lower.includes("phishing")) return "PHISHING"
    if (lower.includes("suspicious")) return "SUSPICIOUS"
    if (lower.includes("safe")) return "SAFE"

    return null
  }

  const risk = getRiskLevel()

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

      <h2 className="text-xl font-semibold text-orange-400 mb-3">
        ✉️ PhishSense AI
      </h2>

      <p className="text-sm text-slate-400 mb-4">
        Detect phishing using AI-based analysis
      </p>

      <textarea
        rows="4"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full bg-black p-2 rounded mb-4"
        placeholder="Paste suspicious email..."
      />

      <button
        onClick={analyze}
        disabled={loading}
        className="w-full bg-cyan-600 hover:bg-cyan-700 py-2 rounded font-semibold"
      >
        {loading ? "Analyzing..." : "Analyze with AI"}
      </button>

      {/* STATUS */}
      {loading && (
        <p className="text-xs text-cyan-400 mt-3 animate-pulse">
          AI is analyzing message...
        </p>
      )}

      {/* ERROR */}
      {error && (
        <p className="text-xs text-red-400 mt-3">
          {error}
        </p>
      )}

      {/* RESULT */}
      {result && (
        <div className="mt-4">

          {/* RISK BADGE */}
          {risk && (
            <p
              className={`text-sm font-semibold mb-2 ${
                risk === "PHISHING"
                  ? "text-red-400"
                  : risk === "SUSPICIOUS"
                  ? "text-yellow-400"
                  : "text-green-400"
              }`}
            >
              {risk === "PHISHING" && "🔴 PHISHING DETECTED"}
              {risk === "SUSPICIOUS" && "🟡 SUSPICIOUS MESSAGE"}
              {risk === "SAFE" && "🟢 SAFE MESSAGE"}
            </p>
          )}

          {/* AI OUTPUT */}
          <pre className="text-sm whitespace-pre-wrap text-slate-300">
            {result}
          </pre>

        </div>
      )}

    </div>
  )
}