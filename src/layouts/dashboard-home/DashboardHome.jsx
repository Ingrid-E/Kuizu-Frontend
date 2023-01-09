import React from 'react'
import Activities from '../activities/Activities'
import Courses from '../courses/Courses'
import DashboardAverages from '../dashboard-averages/DashboardAverages'
import './dashboard-home.css'

const DashboardHome = () => {
  return (
    <div className='dashboard-home'>
      <DashboardAverages />
      <div className='sections'>
        <Activities />
        <Courses />
      </div>
    </div>
  )
}

export default DashboardHome