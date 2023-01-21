import React from "react";
import { useLocation } from "react-router-dom";
import Activities from "../activities/Activities";
import CourseBar from "../course-bar/CourseBar";
import CourseInfo from "../course-info/CourseInfo";
import "./dashboard-course.css";

const DashboardCourse = () => {

  const course = useLocation().state.course
  console.log(course)

  return (
    <div className="dashboard-home">
      <CourseBar text={course.name} />
      <div className="sections">
        <Activities course_id = {course._id} course_name={course.name}/>
        <CourseInfo course= {course}/>
      </div>
    </div>
  );
};

export default DashboardCourse;
