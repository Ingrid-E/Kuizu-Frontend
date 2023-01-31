export const handleLogin = async(googleData)=>{
    const res = await fetch(process.env.REACT_APP_DEV_MICRO+'/user',{
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

export const handleGetUserType = async(type, id)=>{
    const res = await fetch(process.env.REACT_APP_DEV_MICRO+`/user/${type}/`,{
        method: 'POST',
        body: JSON.stringify({
            id_user: id,
        }),
        headers: {
            'Content-Type':'application/json'
        }
    })
    const userData = await res.json()
    return userData
}

export const handleGetUser = async(userId)=>{
    const res = await fetch(process.env.REACT_APP_DEV_MICRO+`/user/${userId}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const userData = await res.json()
    return userData
}
