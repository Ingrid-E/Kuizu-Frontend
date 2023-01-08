import React from 'react'
import CircleBackground from '../../components/circle-background/CircleBackground'
import './home.css'
import logo from '../../assets/images/kuizu-logo.png'
import LoginGoogle from '../../components/google-login/google-login'
const Home = () => {
  return (
    <div id='home'>
        <div id='home__content'>
            <img id='home__img-logo' src={logo} alt='logo.img'></img>
            <div id='home__login-options'>
                <h2>Inicia Sesion</h2>
                <LoginGoogle navigate="/dashboard"/>
            </div>
        </div>
        <CircleBackground />
    </div>
  )
}

export default Home