import React from 'react'
import { CreationView, DashboardCourse, DashboardExam, DashboardHome, Navbar, SideBar } from '../../layouts'
import {useLocation} from 'react-router-dom';
import './dashboard.css'
import { CreationCard } from '../../components';

const Dashboard = ({ window }) => {
  const user = useLocation().state.user;
  if (window === 'home') {
    return (
      <div className='dashboard'>
          <Navbar user_img = {user.imgurl} firstname={user.firstname} lastname={user.lastname}/>
          <DashboardHome/>
      </div>
    )
  }
  if (window === 'course') {
    return (
      <div className='dashboard'>
          <Navbar user_img = {user.imgurl} firstname={user.firstname} lastname={user.lastname}/>
          <DashboardCourse />
      </div>
    )
  }
  if (window === 'exam') {
    return (
      <div className='dashboard'>
          <Navbar user_img = {user.imgurl} firstname={user.firstname} lastname={user.lastname}/>
          <DashboardExam/>
      </div>
    )
  }
}

export default Dashboard