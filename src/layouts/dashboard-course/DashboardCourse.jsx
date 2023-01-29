import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getCourseInfo } from "../../hooks/course-hooks";
import Activities from "../activities/Activities";
import CourseBar from "../course-bar/CourseBar";
import CourseInfo from "../course-info/CourseInfo";
import "./dashboard-course.css";

const DashboardCourse = ({user}) => {
  const {id_course } = useParams();
  const [course, setCourse] = useState({name:"", average:0.0, id_teacher: -1, _id:""})

  useEffect(()=>{
    handleCourseInfo(id_course)
  }, [])

  const handleCourseInfo = async (courseId)=>{
   const courseData = await getCourseInfo(courseId)
   console.log(courseData.data.course)
   setCourse(courseData.data.course)
  }

  return (
    <div className="dashboard-home">
      <CourseBar text={course.name}/>
      <div className="sections">
        <Activities data={[course]} window={"course"}/>
        <CourseInfo course={course} user={user}/>
      </div>
    </div>
  );
};

export default DashboardCourse;
