import React from 'react'
import CircleBackground from '../../components/circle-background/CircleBackground'
import './home.css'
import logo from '../../assets/images/kuizu-logo.png'
import Button from '../../components/button/Button'
import GoogleLogin from '../../components/google-login/google-login'

const Home = () => {
  return (
    <div id='home'>
        <div id='home__content'>
            <img id='home__img-logo' src={logo} alt='logo.img'></img>
            <div id='home__login-options'>
                <h1>Inicia Sesion</h1>
                <GoogleLogin/>
            </div>
        </div>
        <CircleBackground />
    </div>
  )
}

export default Home