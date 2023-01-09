import React from "react";
import CourseBar from "../course-bar/CourseBar";
import ExamContent from "../exam-content/ExamContent";
import ExamInfo from "../exam-info/ExamInfo";
import "./dashboard-exam.css";

const DashboardExam = () => {
  return (
    <div className="dashboard-exam">
      <CourseBar text='Programacion Orientada a Objetos' />
      <div className="sections">
        <ExamContent />
        <ExamInfo />
      </div>
    </div>
  );
};

export default DashboardExam;
