import React from 'react'
import Activities from '../activities/Activities'
import CourseBar from '../course-bar/CourseBar'
import CourseInfo from '../course-info/CourseInfo'
import './dashboard-course.css'

const DashboardCourse = () => {
  return (
    <div className='dashboard-home'>
        <CourseBar text='Programacion Orientada a Objetos' />
        <div className='sections'>
            <Activities />
            <CourseInfo />
        </div>
    </div>
  )
}

export default DashboardCourse