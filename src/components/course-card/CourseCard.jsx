import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CircleImage from '../circle-image/CircleImage'
import './course-card.css'

const CourseCard = ({course, image}) => {

  const nav = useNavigate();
  const user = useLocation().state.user

  function handleClick() {
    nav('/dashboard-course', {state: {user: user, course: course}});
  }

  return (
    <a href='' className='course-card' onClick={handleClick}>
        <CircleImage width='60px' height='60px'image={image} />
        <h2 className='course-card-name'>{course.name}</h2>
    </a>
  )
}

export default CourseCard