import React from "react";
import { useLocation } from "react-router-dom";
import CourseBar from "../course-bar/CourseBar";
import ExamContent from "../exam-content/ExamContent";
import ExamInfo from "../exam-info/ExamInfo";
import "./dashboard-exam.css";

const DashboardExam = () => {

  const name = useLocation().state.info.name

  return (
    <div className="dashboard-exam">
      <CourseBar text='Programacion Orientada a Objetos' />
      <div className="sections">
        <ExamContent />
        <ExamInfo name={name}/>
      </div>
    </div>
  );
};

export default DashboardExam;
