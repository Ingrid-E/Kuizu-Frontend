import React from 'react'
import Activities from '../activities/Activities'
import Courses from '../courses/Courses'
import DashboardAverages from '../dashboard-averages/DashboardAverages'
import './dashboard-home.css'

const DashboardHome = ({user_type, user_type_id}) => {
  return (
    <div className='dashboard-home'>
      <DashboardAverages />
      <div className='sections'>
        <Activities />
        <Courses type={user_type} type_id={user_type_id}/>
      </div>
    </div>
  )
}

export default DashboardHome