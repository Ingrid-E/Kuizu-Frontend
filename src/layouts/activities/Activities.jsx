import React, {useEffect, useState} from "react";
import { LineRule, TestCard, LoadingSpinner} from "../../components";
import { useNavigate } from "react-router-dom";
import { getCourseActivities, updateExamState } from "../../hooks/exam-hooks";
import "./activities.css";

const Activities = ({data, window}) => {
  const [loading, setLoading] = useState(false)
  const [activities, setActivities] = useState([])
  useEffect(()=>{
    listActivities(data)
  }, [data])
  const navigate = useNavigate();


  const listActivities = async(data)=>{
    let allActivities = []
    setLoading(true)
    await Promise.all(data.map(async (course)=>{
      if(course._id != ""){
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
    <div onClick={()=>navigate(`/dashboard/course/${activity.idCourse}/exam/${activity.idExam}`)}>
      <TestCard data={activity} window={window}/>
      <LineRule />
    </div>
  )

  const activitiesFilled = activities
  .filter(activities => activities.state == "finished")
  .map(activity =>
    <div onClick={()=>navigate(`/dashboard/course/${activity.idCourse}/exam/${activity.idExam}`)}>
      <TestCard data={activity} window={window}/>
      <LineRule />
    </div>
  )

  return (
    <div className="activities">
      <div className="activities-unfilled">
        <h4 className="header">Actividades pendientes</h4>
        <div className="container">
          <div className="content">
          {loading? <LoadingSpinner/>:<div></div>}
            {activitiesUnfilled}
          </div>
        </div>
      </div>
      <div className="activities-filled">
        <h4 className="header">Actividades entregadas</h4>
        <div className="container">
          <div className="content">
          {loading? <LoadingSpinner/>:<div></div>}
            {activitiesFilled}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
