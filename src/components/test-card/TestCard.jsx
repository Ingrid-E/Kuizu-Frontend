import React, {useEffect, useState} from "react";
import { getStudentExamGrade } from "../../hooks/exam-hooks";
import CircleImage from "../circle-image/CircleImage";
import Cookies from 'js-cookie';
import "./test-card.css";

const TestCard = ({ data, type, window}) => {

  const imagePlaceholder = "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"

  const [activity, setActivity] = useState(data);

  useEffect(()=>{
    const user = JSON.parse(Cookies.get('user'))
    if(activity.state === "finished"){
      console.log(activity, type)
      getGrade(user.type_id,activity.idExam);
    }
  },[])

  const getGrade = async(student_id, exam_id)=>{
    const grade = await getStudentExamGrade(student_id, exam_id);
    setActivity({...activity, grade: grade.data.data})
  }

  if ((type == "filled")) {
    return (
      <a className="test-card" href="">
        <CircleImage width='50px' height='50px' image={imagePlaceholder} />
        <div className="test-card-data">
          <h3>{activity.name}</h3>
          {window === "dashboard"? (
                      <div className="test-card-data-info">
                      <h2>Asignatura:</h2>
                      <p>{activity.course_name}</p>
                    </div>
          ):(<div></div>)}
        </div>
        <a className="test-card-button-text" href="">
          Sin calificar
        </a>
      </a>
    );
  }

  if ((type == "graded")) {
    return (
      <a className="test-card" href="">
        <CircleImage width='50px' height='50px' image={imagePlaceholder} />
        <div className="test-card-data">
          <h3>{activity.name}</h3>
          {window === "dashboard"? (
                      <div className="test-card-data-info">
                      <h2>Asignatura:</h2>
                      <p>{activity.course_name}</p>
                    </div>
          ):(<div></div>)}
        </div>
        <a className="test-card-button-grade" href="">
          {activity.grade}
        </a>
      </a>
    );
  }
  return (
    <div className="test-card">
      <CircleImage width='50px' height='50px' image={imagePlaceholder} />
      <div className="test-card-data">
        <h3>{activity.name}</h3>
        {window === "dashboard"? (
                      <div className="test-card-data-info">
                      <h2>Asignatura:</h2>
                      <p>{activity.course_name}</p>
                    </div>
          ):(<div></div>)}
      </div>
      <a className="test-card-button" >
        Resolverlo
      </a>
    </div>
  );
};

export default TestCard;
