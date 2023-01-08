import React from 'react'
import CircleImage from '../circle-image/CircleImage'
import './course-card.css'

const CourseCard = ({courseName, image}) => {

  return (
    <a href='' className='course-card'>
        <CircleImage style={{width: '60px', height: '60px', minHeight: '60px', minWidth: '60px'}} image={image} />
        <h2 className='course-card-name'>{courseName}</h2>
    </a>
  )
}

export default CourseCard