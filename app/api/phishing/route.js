import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})

export async function POST(req) {
  try {
    const { text } = await req.json()

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a cybersecurity analyst.

Classify the email STRICTLY into one of:
SAFE, SUSPICIOUS, PHISHING

Follow these rules:

- SAFE → normal communication, no urgency, no links asking for credentials
- SUSPICIOUS → unusual tone, unknown links, minor red flags
- PHISHING → urgency, threatening tone, fake domains, credential requests

Be conservative:
- Do NOT mark normal emails as suspicious
- If no clear red flags → mark SAFE

Respond ONLY in this format:

RISK: <SAFE/SUSPICIOUS/PHISHING>
REASON: <short reason>

Email:
${text}`
    })

    const result = response.text

    if (!result) {
      return Response.json({ error: "No response from AI" })
    }

    return Response.json({ result })

  } catch (err) {
    console.error("Gemini SDK Error:", err)
    return Response.json({ error: "AI failed" })
  }
}