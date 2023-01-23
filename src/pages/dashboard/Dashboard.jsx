import React, {useState, useEffect} from 'react'
import {DashboardCourse, DashboardExam, DashboardHome, Navbar, SideBar } from '../../layouts'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cookies from 'js-cookie';
import './dashboard.css'

const Dashboard = () => {
  const [user, setUser] = useState(JSON.parse(Cookies.get('user')));

  useEffect(()=>{
    setUser(JSON.parse(Cookies.get('user')))
  }, [])

  return (
    <div className='dashboard'>
      <Navbar user_img = {user.imgurl} firstname={user.firstname} lastname={user.lastname}/>
      <SideBar user_img = {user.imgurl} firstname={user.firstname} lastname={user.lastname} rol={user.type}/>
      <Routes>
        <Route path='/' element={<DashboardHome user_type={user.type} user_type_id= {user.type_id}/>}></Route>
        <Route path='/course/:id_course' element={<DashboardCourse/>}></Route>
        <Route path='/course/:id_course/exam/:id_exam' element={<DashboardExam/>}></Route>
      </Routes>
    </div>
  )
}

export default Dashboard