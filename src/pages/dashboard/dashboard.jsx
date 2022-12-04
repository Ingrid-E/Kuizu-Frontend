import React from 'react'
import { useLocation} from "react-router-dom";
import './dashboard.css'

const Dashboard = () => {
    console.log(useLocation().state)
    const {firstname, lastname, email, imgurl} = useLocation().state;
    return (
        <div id='dashboard'>
            <h1>Bienvenido! {firstname+" "+lastname}</h1>
            <h2>Correo: {email}</h2>
            <img src={imgurl} alt="User profile"></img>
        </div>
    )
}

export default Dashboard