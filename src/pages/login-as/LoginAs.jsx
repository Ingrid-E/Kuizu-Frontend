import React from 'react'
import {useLocation} from 'react-router-dom';
import logo from '../../assets/images/kuizu-logo.png'
import Button from '../../components/button/Button'
import CircleBackground from '../../components/circle-background/CircleBackground'
import './login-as.css'
import { handleGetUserType } from '../../hooks/google-login-hook';
import { useNavigate } from "react-router-dom";


const LoginAs = ({navigate}) => {

  const user = useLocation().state.user
  const nav = useNavigate();


  const handleClick = async (type) =>{
    const type_id = await handleGetUserType(type, user.id_user);
    if(type_id.success){
      user.type = type
      if(type == 'teacher'){
        user.type_id = type_id.data.id_teacher;
      }else{
        user.type_id = type_id.data.id_student;

      }
      console.log(user)
      nav(navigate, {state: {user:user}})
    }

  }

  return (
    <div id='login-as'>
        <div id='login-as__content'>
            <img id='login-as__img-logo' src={logo} alt='logo.img'></img>
            <div id='login-as__login-options'>
                <h1>Bienvenido a Kuizu</h1>
                <h2>Selecciona tu rol</h2>
                <div className='login-as__login-options-buttons'>
                    <Button text='Docente' action={()=>handleClick('teacher')}/>
                    <Button text='Estudiante' action={()=>handleClick('student')}/>
                </div>
            </div>
        </div>
        <CircleBackground />
    </div>
  )
}

export default LoginAs