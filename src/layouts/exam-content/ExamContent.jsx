import React, { useState, useEffect } from "react";
import { LineRule, QuestionCard } from "../../components";
import "./exam-content.css";

const ExamContent = ({questions}) => {
  
  const [content, setContent] = useState('questions');
  const [questionList, setQuestionList] = useState([])

  useEffect(()=>{
    if(questions.length > 0){
      setQuestionList(questions.map((question, index) =>
        <div>
            <QuestionCard idQuestion = {question.idQuestion} index={index+1}/>
            <LineRule />
        </div>
      ))
    }
  }, [questions])

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
            {questionList}
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
