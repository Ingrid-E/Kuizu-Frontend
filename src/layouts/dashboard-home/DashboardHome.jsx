import React from 'react'
import Activities from '../activities/Activities'
import Courses from '../courses/Courses'
import DashboardAverages from '../dashboard-averages/DashboardAverages'
import DashboardHeading from '../dashboard-heading/DashboardHeading'
import './dashboard-home.css'

const DashboardHome = () => {
  return (
    <div className='dashboard-home'>
      <DashboardHeading textNormal="Hola denuevo," textBold="Jean Pierre" />
      <DashboardAverages />
      <div className='sections'>
        <Activities />
        <Courses />
      </div>
    </div>
  )
}

export default DashboardHome