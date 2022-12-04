import React, { useEffect, useState } from 'react'
import handleLogin from '../../hooks/google-login-hook';
import { useNavigate } from "react-router-dom";
import './google-login.css'


function LoginGoogle({navigate}) {
    const nav = useNavigate();
    useEffect(()=>{
        window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_CLIENT_ID,
            callback: async (response)=>{
               const res = await handleLogin(response)
               console.log(res)
               if(res.success){
                const user = res.data.user
                nav(navigate, {state: user})
               }
            }
        });
        window.google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large", shape:"pill"}
        )
    }, [])

    return (
        <div className='login-google'>
            <div id="signInDiv">Hola</div>
        </div>
    )
}

export default LoginGoogle;
