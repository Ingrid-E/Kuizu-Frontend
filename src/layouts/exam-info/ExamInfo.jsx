import React, {useEffect, useState} from "react";
import { AverageCardCourse, DateInfoCard, InfoActivitiesCard, TitleCard } from "../../components";
import { getStudentCompletedExam } from "../../hooks/exam-hooks";
import "./exam-info.css";

const ExamInfo = ({data, rol, questions}) => {

  const [numCompleted, setNumCompleted] = useState([])

  useEffect(()=>{
    studentCompleted(data.idExam)
  }, [data])

  const studentCompleted = async(idExam)=>{
    const studentList = await getStudentCompletedExam(idExam)
    if(studentList.success){
      setNumCompleted(studentList.data.data)
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      day: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    return new Intl.DateTimeFormat('es-ES', options).format(date);
  }


  return (
    <div className="exam-info">
      <h4 className="header">Informacion</h4>
      <div className="exam-info-content">
        <TitleCard title={data.name} />
        <DateInfoCard title='Inicio' text={formatDate(data.startAt)} />
        <DateInfoCard title='Finaliza' text={formatDate(data.endAt)} />
        <InfoActivitiesCard title='Numero de preguntas' count={questions} />
        <InfoActivitiesCard title='Numero de entregas' count={numCompleted.length} />
        <InfoActivitiesCard title='Flatan por entregar' count='5' />
      </div>
    </div>
  );
};

export default ExamInfo;
