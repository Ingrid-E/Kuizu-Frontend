import React, { useState, useEffect } from "react";
import { LineRule, QuestionCard } from "../../components";
import CreationView from "../creation-view/CreationView";
import "./exam-content.css";

const ExamContent = ({ questions, addQuestion }) => {
  const [content, setContent] = useState("questions");
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    if (questions.length > 0) {
      setQuestionList(
        questions.map((question, index) => (
          <div>
            <QuestionCard idQuestion={question.idQuestion} index={index + 1} />
            <LineRule />
          </div>
        ))
      );
    }
  }, [questions]);

  const viewQuestions = (e) => {
    e.preventDefault();
    setContent("questions");
  };

  const viewFilled = (e) => {
    e.preventDefault();
    setContent("filled");
  };

  if (content === "questions") {
    return (
      <div className="exam-content">
        <h4 className="header">Contenido</h4>
        <div className="exam-content-buttons">
          <button
            className="exam-content-buttons-button active"
            onClick={viewQuestions}
          >
            <div className="exam-content-buttons-button-circle"></div>
            <span className="exam-content-buttons-button-text">Preguntas</span>
          </button>
          <button className="exam-content-buttons-button" onClick={viewFilled}>
            <div className="exam-content-buttons-button-circle"></div>
            <span className="exam-content-buttons-button-text">
              Estudiantes
            </span>
          </button>
        </div>
        <div className="container">
          <div className="content">{questionList}</div>
        </div>
        <button className="exam-content-button-add" onClick={(e) => addQuestion(e, 'question')}>Agregar pregunta</button>
      </div>
    );
  }
  if (content === "filled") {
    return (
      <div className="exam-content">
        <h4 className="header">Contenido</h4>
        <div className="exam-content-buttons">
          <button
            className="exam-content-buttons-button"
            onClick={viewQuestions}
          >
            <div className="exam-content-buttons-button-circle"></div>
            Preguntas
          </button>
          <button
            className="exam-content-buttons-button active"
            onClick={viewFilled}
          >
            <div className="exam-content-buttons-button-circle"></div>
            Estudiantes
          </button>
        </div>
        <div className="container">
          <div className="content">{questionList}</div>
        </div>
      </div>
    );
  }
};

export default ExamContent;
