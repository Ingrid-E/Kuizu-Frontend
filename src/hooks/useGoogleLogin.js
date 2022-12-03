const useGoogleLogin = async(googleData)=>{
    const res = await fetch('http://localhost:8000/user',{
        method: 'POST',
        body: JSON.stringify({
            token: googleData.tokenId,
        }),
        headers: {
            'Content-Type':'application/json'
        }
    })
    const data = await res.json()
    return data
}

export default useGoogleLogin;
