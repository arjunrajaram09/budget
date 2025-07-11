export default defineEventHandler(async (event) => {
    const body  = await readBody(event)
    console.log("Body: ", body)

    const plaidRequest = {
        "client_id": "6860716ee05b6f00229c2e8d",
        "secret": "20a566122e6571a3cabd2aede2734c",
        "access_token": "access-sandbox-694bcb4d-d28f-40a2-bd3d-695bb93d3706",
        "start_date": body.start_date,
        "end_date": body.end_date    
    }
    const result = await $fetch('https://sandbox.plaid.com/transactions/get', {
        method: 'post',
        body: plaidRequest
    })

    console.log("Result:", result )
    return result; 
})
