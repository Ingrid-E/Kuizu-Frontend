import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import {useNavigate} from 'react-router-dom'
import Icon from '../icon/Icon';
import './back-button.css'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <a className='back-button' onClick={()=>navigate(-1)}>
        <Icon css='icon-arrow-left' icon={faChevronLeft} />
    </a>
  )
}

export default BackButton