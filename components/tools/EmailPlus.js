"use client"
import { useState } from "react"

export default function EmailPlus() {
  const [email, setEmail] = useState("")
  const [tag, setTag] = useState("")
  const [result, setResult] = useState("")

  const generate = () => {
    if (!email || !tag) return

    const [name, domain] = email.split("@")
    const plusEmail = `${name}+${tag}@${domain}`

    setResult(plusEmail)
    navigator.clipboard.writeText(plusEmail)
  }

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

      <h2 className="text-xl font-semibold text-orange-400 mb-3">
        Address Plus Logic
      </h2>

      <p className="text-sm text-slate-400 mb-4">
        Generate sub-addresses for filtering & tracking.
      </p>

      <input
        placeholder="name@domain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 bg-black rounded mb-3"
      />

      <input
        placeholder="task"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="w-full px-3 py-2 bg-black rounded mb-4"
      />

      <button
        onClick={generate}
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
      >
        Generate Plus Address
      </button>

      {result && (
        <p className="text-sm text-orange-400 mt-3">
          Copied: {result}
        </p>
      )}

    </div>
  )
}