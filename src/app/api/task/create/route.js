export async function POST(req) {
    const reqData = await req.json()

    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/create/Task`, {
       
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqData)
    })
  
    const data = await res.json()
  
    return Response.json(data)
}
