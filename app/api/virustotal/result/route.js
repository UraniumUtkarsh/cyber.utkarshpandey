export async function POST(req) {
  const { id } = await req.json()

  const response = await fetch(
    `https://www.virustotal.com/api/v3/analyses/${id}`,
    {
      headers: {
        "x-apikey": process.env.VIRUSTOTAL_API_KEY
      }
    }
  )

  const data = await response.json()
  return Response.json(data)
}