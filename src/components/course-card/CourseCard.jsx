import React from 'react'
import CircleImage from '../circle-image/CircleImage'
import './course-card.css'

const CourseCard = ({course, image}) => {

  return (
    <a className='course-card'>
        <CircleImage width='60px' height='60px'image={image} />
        <h2 className='course-card-name'>{course.name}</h2>
    </a>
  )
}

export default CourseCard