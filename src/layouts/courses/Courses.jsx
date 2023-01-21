import React, {useEffect, useState} from 'react'
import { CourseCard } from '../../components'
import './courses.css'
import { getAllCourses, getUserTypeCourse} from '../../hooks/course-hooks'

const Courses = ({type, type_id}) => {
  const img = 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80';

  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    getCourse(type, type_id)
  }, [])

  const getCourse = async(user_type, user_type_id) =>{
    const courseList = await getUserTypeCourse(user_type, user_type_id)
    console.log(courseList.data.courses)
    setCourses(courseList.data.courses)
  }

  const paintCourses = courses.map((course)=>
  <CourseCard course={course} image={img} />
  )

  return (
    <div className='courses'>
        <h4 className='header'>Cursos</h4>
        <p>{getCourse}</p>
        <div className='courses-content'>
            {paintCourses}
        </div>
    </div>
  )
}

export default Courses