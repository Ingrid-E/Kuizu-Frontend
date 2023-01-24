import React from "react";
import { useLocation } from "react-router-dom";
import Activities from "../activities/Activities";
import CourseBar from "../course-bar/CourseBar";
import CourseInfo from "../course-info/CourseInfo";
import "./dashboard-course.css";

const DashboardCourse = () => {

  const nameCourse = useLocation().state.name

  return (
    <div className="dashboard-home">
      <CourseBar text={nameCourse} />
      <div className="sections">
        <Activities />
        <CourseInfo />
      </div>
    </div>
  );
};

export default DashboardCourse;
