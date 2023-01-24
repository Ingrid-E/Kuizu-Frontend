import React from "react";
import { AverageCardCourse, DateInfoCard, InfoActivitiesCard, TitleCard } from "../../components";
import "./exam-info.css";

const ExamInfo = ({data, rol, questions}) => {

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


  return (
    <div className="exam-info">
      <h4 className="header">Informacion</h4>
      <div className="exam-info-content">
        <TitleCard title={data.name} />
        <DateInfoCard title='Inicio' text={formatDate(data.startAt)} />
        <DateInfoCard title='Finaliza' text={formatDate(data.endAt)} />
        <InfoActivitiesCard title='Numero de preguntas' count={questions} />
        <InfoActivitiesCard title='Numero de entregas' count='8' />
        <InfoActivitiesCard title='Flatan por entregar' count='5' />
      </div>
    </div>
  );
};

export default ExamInfo;
