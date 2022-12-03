import React, { useEffect } from 'react'

function GoogleLogin(){
    useEffect(()=>{
        window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_CLIENT_ID,
            callback: handleCallbackResponse()
        })

        window.google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {type: "standard"}
        )
    }, [])

    const handleCallbackResponse = (response)=>{
        console.log(response)
    }

    return(
        <div className='google-login'>
            <div id="signInDiv"></div>
        </div>
    )
}

export default GoogleLogin;
