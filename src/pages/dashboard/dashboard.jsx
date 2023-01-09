import React from 'react'
import { DashboardExam, DashboardHome, Navbar } from '../../layouts'
import DashboardCourse from '../../layouts/dashboard-course/DashboardCourse'
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Navbar username='Chris Harris' />
        <DashboardExam />
    </div>
  )
}

export default Dashboard