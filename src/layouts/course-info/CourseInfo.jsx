import React, { useEffect, useState } from "react";
import {
  AverageCardCourse,
  InfoActivitiesCard,
  UserInfoCard,
} from "../../components";
import "./course-info.css";
import {
  getStudentCoursesAverage,
  getTeacherCoursesAverage,
} from "../../hooks/course-hooks";

const CourseInfo = ({ course, user }) => {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    if (course._id != "" && user.type === "teacher") {
      handleCourseAverag(course.id_teacher, course._id);
    }
    if (user.type === "student") {
      handleStudentAverage(user.type_id, course._id);
    }
  }, [course]);

  const handleCourseAverag = async (id_teacher, course_id) => {
    const courseList = await getTeacherCoursesAverage(id_teacher);
    const course = courseList.data.courses.find(
      (element) => element.id_course === course_id
    );
    if (course) setAverage(course.average);
    else setAverage(0.0);
  };

  const handleStudentAverage = async (id_student, course_id) => {
    const courseList = await getStudentCoursesAverage(id_student);
    const course = await courseList.data.courses.find(
      (element) => element.id_course === course_id
    );
    if (course) setAverage(course.average);
    else setAverage(0.0);
  };

  return (
    <div className="course-info">
      <h4 className="header">Informacion</h4>
      <div className="course-info-content">
        <div className="course-info-content-values">
          <AverageCardCourse average={average === 0 ? "--" : average} />
          <div className="course-info-content-values-activities">
            <InfoActivitiesCard title="Actividades entregadas" count="5" />
            <InfoActivitiesCard title="Actividades pendientes" count="2" />
          </div>
        </div>
        <UserInfoCard
          type={"teacher"}
          type_id={course.id_teacher}
          name="John Doe Cardenas Perea"
        />
      </div>
    </div>
  );
};

export default CourseInfo;
