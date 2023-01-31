import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getCourseInfo } from "../../hooks/course-hooks";
import Activities from "../activities/Activities";
import CourseBar from "../course-bar/CourseBar";
import CourseInfo from "../course-info/CourseInfo";
import CreationView from "../creation-view/CreationView";
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

  const [creationComponent, setCreationComponent] = useState("");

  function handleClick(e, creation) {
    e.preventDefault();
    setCreationComponent(creation);
  }

  return (
    <div className="dashboard-course">
      <CourseBar text={course.name}/>
      <div className="sections-course">
        <Activities data={[course]} window={"course"} addStudent={handleClick} />
        <CourseInfo course={course} user={user}/>
      </div>
      {creationComponent === "exam" ||
        creationComponent === "course" ||
        creationComponent === "question" ||
        creationComponent === "student" ? (
          <div className="creation-view-container-active">
            <button
              className="creation-view-exit-button"
              onClick={(e) => handleClick(e, "")}
            >
              x
            </button>
            <CreationView type={creationComponent} />
          </div>
        ) : (
          <div className='empty'></div>
        )}
    </div>
  );
};

export default DashboardCourse;
