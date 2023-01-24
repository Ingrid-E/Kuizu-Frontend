import React, {useEffect, useState} from 'react'
import { CourseCard } from '../../components'
import { useNavigate } from "react-router-dom";
import './courses.css'

const Courses = ({data}) => {
  const img = 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80';
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    setCourses(data)
  }, [data])

  const paintCourses = courses.map((course)=>
  <div onClick={()=>navigate(`/dashboard/course/${course._id}`)}>
      <CourseCard course={course} image={img}/>
  </div>
  )

  return (
    <div className='courses'>
        <h4 className='header'>Cursos</h4>
        <div className='courses-content'>
            {paintCourses}
        </div>
    </div>
  )
}

export default Courses