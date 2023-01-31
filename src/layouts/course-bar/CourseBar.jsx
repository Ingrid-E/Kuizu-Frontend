import React from 'react'
import { BackButton, CourseTitle } from '../../components'
import'./course-bar.css'

const CourseBar = ( { text}) => {
  return (
    <div className='course-bar'>
      <div>
      <BackButton />
      </div>
        <CourseTitle title={text} />
    </div>
  )
}

export default CourseBar