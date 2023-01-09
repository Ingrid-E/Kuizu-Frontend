import React from 'react'
import './course-title.css'

const CourseTitle = ( { title }) => {
  return (
    <div className='course-title'>
        <div className='course-title-circle'></div>
        <div className='course-title-circle'></div>
        <h1 className='course-title-text'>{title}</h1>
    </div>
  )
}

export default CourseTitle