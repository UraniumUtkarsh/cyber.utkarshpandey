"use client"
import { useState } from "react"

export default function UrlScanner() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [statusMsg, setStatusMsg] = useState("")
  const [error, setError] = useState("")

  const scan = async () => {
    if (!url) return

    setLoading(true)
    setResult(null)
    setError("")
    setStatusMsg("Submitting URL...")

    try {
      // STEP 1: submit URL
      const res = await fetch("/api/virustotal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url }),
      })

      const data = await res.json()

      if (!data?.data?.id) {
        throw new Error("Invalid response from VirusTotal")
      }

      const analysisId = data.data.id

      let resultData = null
      let status = "queued"
      let attempts = 0

      // STEP 2: poll until completed (max 10 tries)
      while (status !== "completed" && attempts < 10) {
        await new Promise((r) => setTimeout(r, 3000))

        const resultRes = await fetch("/api/virustotal/result", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id: analysisId }),
        })

        const json = await resultRes.json()

        status = json.data.attributes.status
        setStatusMsg(`Analysis status: ${status}`)

        if (status === "completed") {
          resultData = json.data.attributes.stats
          break
        }

        attempts++
      }

      if (!resultData) {
        throw new Error("Analysis timeout. Try again.")
      }

      setResult(resultData)

    } catch (err) {
      console.error(err)
      setError(err.message || "Something went wrong")
    }

    setLoading(false)
  }

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

      <h2 className="text-xl font-semibold text-orange-400 mb-3">
        🔗 URL Scanner
      </h2>

      <p className="text-sm text-slate-400 mb-4">
        Scan URLs using VirusTotal API
      </p>

      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        className="w-full px-3 py-2 bg-black rounded mb-4"
      />

      <button
        onClick={scan}
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded font-semibold"
      >
        {loading ? "Scanning..." : "Scan URL"}
      </button>

      {/* STATUS */}
      {statusMsg && (
        <p className="text-xs text-cyan-400 mt-3">
          {statusMsg}
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
        <div className="mt-4 text-sm space-y-1">

          <p className="text-green-400">
            🟢 Harmless: {result.harmless}
          </p>

          <p className="text-yellow-400">
            🟡 Suspicious: {result.suspicious}
          </p>

          <p className="text-red-400">
            🔴 Malicious: {result.malicious}
          </p>

        </div>
      )}

    </div>
  )
}