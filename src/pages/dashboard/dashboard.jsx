import React from 'react'
import { DashboardHome, Navbar } from '../../layouts'
import {useLocation} from 'react-router-dom';
import './dashboard.css'

const dashboard = () => {
  const user = useLocation().state.user
  return (
    <div className='dashboard'>
        <Navbar user_img = {user.imgurl}/>
        <DashboardHome/>
    </div>
  )
}

export default dashboard