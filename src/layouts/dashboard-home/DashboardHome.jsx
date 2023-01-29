import React, {useState, useEffect} from 'react'
import { getUserTypeCourse } from '../../hooks/course-hooks'
import Activities from '../activities/Activities'
import Courses from '../courses/Courses'
import DashboardAverages from '../dashboard-averages/DashboardAverages'
import './dashboard-home.css'

const DashboardHome = ({user_type, user_type_id}) => {

  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    getCourse(user_type, user_type_id)
  }, [])

  const getCourse = async(type, type_id) =>{
    const courseList = await getUserTypeCourse(type, type_id)
    setCourses(courseList.data.courses)
  }

  return (
    <div className='dashboard-home'>
      <DashboardAverages data= {courses} userType = {user_type} userId={user_type_id}/>
      <div className='sections'>
        <Activities data={courses} window={"dashboard"} userType = {user_type} userId={user_type_id}/>
        <Courses data={courses}/>
      </div>
    </div>
  )
}

export default DashboardHome