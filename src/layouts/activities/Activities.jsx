import React, {useEffect, useState} from "react";
import { LineRule, TestCard } from "../../components";
import { getCourseActivities } from "../../hooks/course-hooks";
import "./activities.css";

const Activities = ({course_id, course_name}) => {

  const [activities, setActivities] = useState([{}])

  useEffect(()=>{
    listActivities(course_id)
  }, [])

  const test1 = {
    name: "Animales Salvajes",
    course: "Biologia",
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    grade: 4.8,
  };

  const listActivities = async(course_id)=>{
    const activitiesData = await getCourseActivities(course_id)
    const activitiesList = await activitiesData.data.data
    activitiesList.forEach(activity => {
      activity.course_name = course_name
    });
    setActivities(activitiesList)
  }

  const activitiesUnfilled = activities
  .filter(activities => activities.state != "finished")
  .map(activity =>
    <div>
      <TestCard data={activity}/>
      <LineRule />
    </div>
  )

  const activitiesFilled = activities
  .filter(activities => activities.state == "finished")
  .map(activity =>
    <div>
      <TestCard data={activity}/>
      <LineRule />
    </div>
  )

  return (
    <div className="activities">
      <div className="activities-unfilled">
        <h4 className="header">Actividades pendientes</h4>
        <div className="container">
          <div className="content">
            {activitiesUnfilled}
          </div>
        </div>
      </div>
      <div className="activities-filled">
        <h4 className="header">Actividades entregadas</h4>
        <div className="container">
          <div className="content">
            {activitiesFilled}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
