import React, {useEffect, useState} from 'react'
import { AverageCard } from '../../components'
import { getCourseAverage } from '../../hooks/course-hooks'
import './dashboard-averages.css'

const DashboardAverages = ({data}) => {

  const [courses, setCourses] = useState([])

  useEffect(()=>{
    handleCourseAverages(data)
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

  const paintAverages = courses.map(course => <AverageCard average={course.average} courseName={course.name}/>)

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