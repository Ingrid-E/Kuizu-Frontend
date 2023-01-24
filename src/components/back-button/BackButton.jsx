import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Icon from '../icon/Icon';
import './back-button.css'

const BackButton = () => {
  const nav = useNavigate();
  const user = useLocation().state.user

  function handleClick() {
    nav('/dashboard', {state: {user: user}});
  }

  return (
    <a className='back-button' href="" onClick={handleClick}>
        <Icon css='icon-arrow-left' icon={faChevronLeft} />
    </a>
  )
}

export default BackButton