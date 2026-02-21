const SMM_API_URL = 'https://ordersosmed.id/api/v2'
const API_KEY = process.env.SMM_API_KEY

export async function POST(request) {
  try {
    const body = await request.json()
    
    const formData = new URLSearchParams({
      key: API_KEY,
      ...body
    })

    const response = await fetch(SMM_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString()
    })

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'API Error', message: error.message }, { status: 500 })
  }
}
