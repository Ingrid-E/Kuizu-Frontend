import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CircleImage from '../circle-image/CircleImage'
import './course-card.css'

const CourseCard = ({courseName, image}) => {

  const nav = useNavigate();
  const user = useLocation().state.user

  function handleClick() {
    nav('/dashboard-course', {state: {user: user, name: courseName}});
  }

  return (
    <a href='' className='course-card' onClick={handleClick}>
        <CircleImage width='60px' height='60px'image={image} />
        <h2 className='course-card-name'>{courseName}</h2>
    </a>
  )
}

export default CourseCard