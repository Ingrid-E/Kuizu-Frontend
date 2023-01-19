import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './back-button.css'

const BackButton = () => {
  const nav = useNavigate();
  const user = useLocation().state.user

  function handleClick() {
    nav('/dashboard', {state: {user: user}});
  }

  return (
    <a className='back-button' href="" onClick={handleClick}>
        a
    </a>
  )
}

export default BackButton