const handleLogin = async(googleData)=>{
    const res = await fetch('http://localhost:8000/user',{
        method: 'POST',
        body: JSON.stringify({
            token: googleData.credential,
        }),
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    const userData = await res.json()
    return userData
}

export default handleLogin;
