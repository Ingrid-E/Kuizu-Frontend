import React from "react";
import { LineRule, QuestionCard } from "../../components";
import "./exam-content.css";

const ExamContent = () => {
  return (
    <div className="exam-content">
      <div className="exam-content-buttons">
        <button className="exam-content-buttons-button active">
          <div className="exam-content-buttons-button-circle"></div>
          Preguntas
        </button>
        <button className="exam-content-buttons-button">
          <div className="exam-content-buttons-button-circle"></div>
          Estudiantes
        </button>
      </div>
      <div className="container">
        <div className="content">
            <QuestionCard />
            <LineRule />
            <QuestionCard />
            <LineRule />
            <QuestionCard />
            <LineRule />
            <QuestionCard />
            <LineRule />
            <QuestionCard />
            <LineRule />
            <QuestionCard />
            <LineRule />
            <QuestionCard />
        </div>
      </div>
      <button className="exam-content-button-add">
          Agregar pregunta
      </button>
    </div>
  );
};

export default ExamContent;
