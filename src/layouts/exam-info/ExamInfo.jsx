import React from "react";
import { AverageCardCourse, DateInfoCard, InfoActivitiesCard, TitleCard } from "../../components";
import "./exam-info.css";

const ExamInfo = ({name}) => {
  return (
    <div className="exam-info">
      <h4 className="header">Informacion</h4>
      <div className="exam-info-content">
        <TitleCard title={name} />
        <DateInfoCard title='Inicio' text='03 de noviembre - 8:00 PM' />
        <DateInfoCard title='Finaliza' text='03 de noviembre - 12:00 PM' />
        <InfoActivitiesCard title='Numero de preguntas' count='5' />
        <InfoActivitiesCard title='Numero de entregas' count='8' />
        <InfoActivitiesCard title='Flatan por entregar' count='5' />
      </div>
    </div>
  );
};

export default ExamInfo;
