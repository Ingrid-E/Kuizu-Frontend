import React, { useEffect, useState } from "react";
import {
  LineRule,
  TestCard,
  LoadingSpinner,
  CircleImage,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { getCourseActivities, getStudentCompletedExam, updateExamState } from "../../hooks/exam-hooks";
import "./activities.css";
import { getUserInfo } from "../../hooks/course-hooks";

const Activities = ({ data, window, addStudent }) => {
  const [loading, setLoading] = useState(false)
  const [activities, setActivities] = useState([])
  //Only for teachers
  const [completedActivities, setCompletedActivities] = useState([])

  useEffect(() => {
    listActivities(data)
  }, [data])
  const navigate = useNavigate();


  const listActivities = async (data) => {
    let allActivities = []
    setLoading(true)
    await Promise.all(data.map(async (course) => {
      if (course._id != "") {
        await updateExamState(course._id)
        const courseActivities = await getCourseActivities(course._id)
        const courseActivitiesData = courseActivities.data.data
        courseActivitiesData.forEach(activity => {
          activity.course_name = course.name
          allActivities.push(activity)
        })
      }
    }))
    setLoading(false)
    setActivities(allActivities)
  }


  const activitiesUnfilled = activities
    .filter(activities => activities.state != "finished")
    .map(activity =>
      <div onClick={() => navigate(`/dashboard/course/${activity.idCourse}/exam/${activity.idExam}`)}>
        <TestCard data={activity} window={window} />
        <LineRule />
      </div>
    )

  const activitiesFilled = activities
    .filter(activities => activities.state == "finished")
    .map(activity =>
      <div onClick={() => navigate(`/dashboard/course/${activity.idCourse}/exam/${activity.idExam}`)}>
        <TestCard data={activity} window={window} type={"graded"} />
        <LineRule />
      </div>
    )


  const studentCompleted = async (idExam) => {
    const studentCompletedActivities = []
    const studentList = await getStudentCompletedExam(idExam);
    await Promise.all(
      studentList.data.data.forEach(async (student) => {
        const studentInfo = await getUserInfo(student.idStudent)
        studentCompletedActivities.push(studentInfo)
      })
    )

    setCompletedActivities(studentCompletedActivities)

  }

  return (
    <div className="activities">
      <div className="activities-unfilled">
        <h4 className="header">Actividades pendientes</h4>
        <div className="container">
          <div className="content">
            {loading ? <LoadingSpinner /> : <div></div>}
            {activitiesUnfilled}
          </div>
        </div>
      </div>
      <div className="activities-filled">
        <h4 className="header">Actividades entregadas</h4>
        <div className="container">
          <div className="content">
            {loading ? <LoadingSpinner /> : <div></div>}
            {activitiesFilled}
          </div>
        </div>
      </div>
      {window === "course" ? (
        <div className="course-students">
          <h4 className="header">Estudiantes</h4>
          <div className="course-students-container">
            <div className="course-students-container-content">
              <CircleImage
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                width="65px"
                height="65px"
              />
              <CircleImage
                image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                width="65px"
                height="65px"
              />
              <CircleImage
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"
                width="65px"
                height="65px"
              />
              <CircleImage
                image="https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                width="65px"
                height="65px"
              />
              <CircleImage
                image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                width="65px"
                height="65px"
              />
              <CircleImage
                image="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
                width="65px"
                height="65px"
              />
              <CircleImage
                image="https://images.unsplash.com/photo-1542343633-ce3256f2183e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                width="65px"
                height="65px"
              />
            </div>
            <button className="add-student" onClick={(e) => addStudent(e, 'student')}>Agregar estudiante</button>
          </div>
        </div>
      ) : (
        <div className="empty"></div>
      )}
    </div>
  );
};

export default Activities;
