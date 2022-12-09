const handleLogin = async(googleData)=>{
    const res = await fetch(process.env.REACT_APP_USER_MICRO+'/user',{
        method: 'POST',
        body: JSON.stringify({
            token: googleData.credential,
        }),
        headers: {
            'Content-Type':'application/json'
        }
    })
    const userData = await res.json()
    return userData
}

export default handleLogin;
