import React, {useEffect, useState} from 'react'
import { AverageCardCourse, InfoActivitiesCard, UserInfoCard } from '../../components'
import './course-info.css'
import { getTeacherCoursesAverage } from '../../hooks/course-hooks'

const CourseInfo = ({course}) => {

  const [average, setAverage] = useState(0)

  useEffect(()=>{
    handleCourseAverag(course.id_teacher, course._id)
  }, [])

  const handleCourseAverag =async(id_teacher, course_id)=>{
      const courseList = await getTeacherCoursesAverage(id_teacher)
      const course = courseList.data.courses.find(element => element.id_course = course_id)
      setAverage(course.average)
  }

  return (
    <div className='course-info'>
        <h4 className="header">Informacion</h4>
        <div className='course-info-content'>
            <AverageCardCourse average={average === 0? "--": average} />
            <InfoActivitiesCard title='Actividades entregadas' count='5' />
            <InfoActivitiesCard title='Actividades pendientes' count='2' />
            <UserInfoCard  type={"teacher"} type_id={course.id_teacher} name='John Doe Cardenas Perea' />
        </div>
    </div>
  )
}

export default CourseInfo