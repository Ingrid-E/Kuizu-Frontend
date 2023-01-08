import React from 'react'
import logo from '../../assets/images/kuizu-logo.png'
import Button from '../../components/button/Button'
import CircleBackground from '../../components/circle-background/CircleBackground'
import './login-as.css'

const LoginAs = () => {
  return (
    <div id='login-as'>
        <div id='login-as__content'>
            <img id='login-as__img-logo' src={logo} alt='logo.img'></img>
            <div id='login-as__login-options'>
                <h1>Bienvenido a Kuizu</h1>
                <h2>Selecciona tu rol</h2>
                <div className='login-as__login-options-buttons'>
                    <Button text='Docente' />
                    <Button text='Estudiante' />
                </div>
            </div>
        </div>
        <CircleBackground />
    </div>
  )
}

export default LoginAs