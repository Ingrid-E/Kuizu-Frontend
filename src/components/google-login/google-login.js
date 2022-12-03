import React, { useEffect, useState } from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


function LoginGoogle() {
    const [user, setUser] = useState({})

    useEffect(()=>{}, user)

    const handleLogin = async(googleData)=>{
        console.log(googleData)
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
        console.log(userData.data.user)
        setUser(userData.data.user);
    }
    
    return (
        <div className='google-login'>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log("Iniciando");
                        handleLogin(credentialResponse)
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
            <h1>Nombre: {user.firstname}</h1>
            <h1>Apellido: {user.lastname}</h1>
            <h1>Correo: {user.email}</h1>
            <h1>Foto perfil:</h1>
            <img src={user.imgurl}></img>
        </div>
    )
}

export default LoginGoogle;
