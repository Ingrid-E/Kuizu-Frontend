import React from 'react'
import { BackButton, CourseTitle } from '../../components'
import { useNavigate } from 'react-router-dom';
import'./course-bar.css'

const CourseBar = ( { text}) => {
  const navigate = useNavigate();
  return (
    <div className='course-bar'>
      <div onClick={()=> navigate(-1)}>
      <BackButton />
      </div>
        <CourseTitle title={text} />
    </div>
  )
}

export default CourseBar