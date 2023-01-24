import React from "react";
import {DateInfoCard, InfoActivitiesCard, TitleCard } from "../../components";
import "./exam-info-student.css";

const ExamInfoStudent = ({data, rol, questions}) => {

  console.log(data)

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

  function formatTimeLimit(timelimit = 0){
    const hours = Math.floor(timelimit / 60);
    const remainingMinutes = timelimit % 60;
    if(hours <= 0){
      return `${remainingMinutes} minutos`
    }
    return `${hours} horas y ${remainingMinutes} minutos`
  }

  return (
    <div className="exam-info-student">
      <div className="exam-info-content">
        <h2>Tiempo: {formatTimeLimit(data.timeLimit)}</h2>
        <h2>Numero de preguntas: {questions}</h2>
        <h2>Inicio: {formatDate(data.startAt)}</h2>
        <h2>Finalizacion: {formatDate(data.endAt)}</h2>
        {data.state === "active"? 
        <div>
          <h2>Active</h2>
        </div>
        :
        <div>
        </div>
        }
      </div>
    </div>
  );
};

export default ExamInfoStudent;
