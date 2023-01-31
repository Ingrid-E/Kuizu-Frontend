import React, {useEffect, useState} from 'react'
import { AverageCardCourse, InfoActivitiesCard, UserInfoCard } from '../../components'
import './course-info.css'
import { getCourseStudents, getStudentCoursesAverage, getTeacherCoursesAverage } from '../../hooks/course-hooks'
import { getCourseActivities, getStudentCompletedExam } from '../../hooks/exam-hooks'

const CourseInfo = ({ course, user }) => {

  const [average, setAverage] = useState(0.0)
  const [activities, setActivities] = useState([])
  const [students, setStudents] = useState(0)
  useEffect(()=>{
    if(course._id != "" && user.type === "teacher"){
      handleCourseAverag(course.id_teacher, course._id)
    }
    if (user.type === "student") {
      handleStudentAverage(user.type_id, course._id);
    }
  }, [course]);

  const handleCourseAverag =async(id_teacher, course_id)=>{
      const courseList = await getTeacherCoursesAverage(id_teacher)
      const course = courseList.data.courses.find(element => element.id_course === course_id)
      if(course)  setAverage(course.average)

      const courseActivities = await getCourseActivities(course_id);
      if(courseActivities.data.data.length > 0) setActivities(courseActivities.data.data)
      
      //const studentList = await getCourseStudents(course_id)
      //if(studentList.data.students.length <= 0) setStudents(0)
      //else setStudents(studentList.data.students.length)
  }

  const handleStudentAverage =async(id_student, course_id)=>{
    const courseList = await getStudentCoursesAverage(id_student)
    const course = await courseList.data.courses.find(element => element.id_course === course_id)
    if(course)  setAverage(course.average)
  }

  return (
    <div className='course-info'>
        <h4 className="header">Informacion</h4>
        <div className='course-info-content'>
            <AverageCardCourse average={average === 0? "--": average} />
            <InfoActivitiesCard title={user.type == "teacher"? 'Actividades creadas': 'Actividades entregadas'} count={user.type == "teacher"? activities.length: activities.filter(activity => activity.status = "finished").length} />
            <InfoActivitiesCard title={user.type == "teacher"? 'Estudiantes Matriculados': 'Actividades pendientes'} count= {user.type == "teacher"? students: activities.filter(activity => activity.status = "active").length} />
            <UserInfoCard  type={"teacher"} type_id={course.id_teacher} />
        </div>
      </div>
  );
};

export default CourseInfo;
