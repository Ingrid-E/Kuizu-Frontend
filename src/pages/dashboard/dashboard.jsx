import React from 'react'
import { DashboardHome, Navbar } from '../../layouts'
import './dashboard.css'

const dashboard = () => {
  return (
    <div className='dashboard'>
        <Navbar />
        <DashboardHome />
    </div>
  )
}

export default dashboard