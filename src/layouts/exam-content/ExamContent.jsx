import React from "react";
import { useState } from "react";
import { LineRule, QuestionCard } from "../../components";
import "./exam-content.css";

const ExamContent = () => {
  
  const [content, setContent] = useState('questions');

  const viewQuestions = e => {
    setContent('questions');
  }

  const viewFilled = e => {
    setContent('filled');
  }
  
  if (content === 'questions') {
    return (
      <div className="exam-content">
        <div className="exam-content-buttons">
          <button className="exam-content-buttons-button active" onClick={viewQuestions}>
            <div className="exam-content-buttons-button-circle"></div>
            Preguntas
          </button>
          <button className="exam-content-buttons-button" onClick={viewFilled}>
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
  }
  if (content === 'filled') {
    return (
      <div className="exam-content">
        <div className="exam-content-buttons">
          <button className="exam-content-buttons-button" onClick={viewQuestions}>
            <div className="exam-content-buttons-button-circle"></div>
            Preguntas
          </button>
          <button className="exam-content-buttons-button active" onClick={viewFilled}>
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
      </div>
    );
  }
  
};

export default ExamContent;
