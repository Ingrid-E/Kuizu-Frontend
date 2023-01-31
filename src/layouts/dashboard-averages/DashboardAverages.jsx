import React, {useEffect, useState} from 'react'
import { AverageCard } from '../../components'
import { getCourseAverage, getStudentCoursesAverage, getTeacherCoursesAverage } from '../../hooks/course-hooks'
import './dashboard-averages.css'

const DashboardAverages = ({data,userType, userId}) => {

  const [courses, setCourses] = useState([])

  useEffect(()=>{
    if(userType === "student"){
      handleStudentCourseAverages(userId)
    }else{
      handleTeacherCourseAverages(userId)
    }
  }, [data])

  const handleCourseAverages = async(courseList)=>{
    let courseAverageList = []
    await Promise.all(
      courseList.map(async(course)=>{
        const average = await getCourseAverage(course._id)
        const averageData = average.data.data.average
        courseAverageList.push({name: course.name, average:averageData})
      })
    )  
    setCourses(courseAverageList)
  }

  const handleStudentCourseAverages = async(user_id)=>{
    const coursesAvg = await getStudentCoursesAverage(user_id);
    setCourses(coursesAvg.data.courses)
  }

  const handleTeacherCourseAverages = async(user_id)=>{
    const coursesAvg = await getTeacherCoursesAverage(user_id);
    setCourses(coursesAvg.data.courses)
  }

  const paintAverages = courses.map(course => <AverageCard average={course.average} courseName={course.course}/>)

  return (
    <div className='dashboard-averages'>
        <h4 className='header'>Promedios</h4>
        <div className='dashboard-averages__averages'>
          {paintAverages}
        </div>
    </div>
  )
}

export default DashboardAverages