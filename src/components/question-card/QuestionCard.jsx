import React, { useState } from "react";
import CircleButton from "../circle-button/CircleButton";
import "./question-card.css";

const QuestionCard = () => {

    const [changeClass, setChangeClass] = useState('question-card')

  return (
    <div className={changeClass}>
      <div className="question-card-header">
        <h1 className="question-card-header-title" onClick={() => changeClass == 'question-card' ? setChangeClass('question-card active') : setChangeClass('question-card')}>Pregunta 1</h1>
        <div className="question-card-header-buttons">
          <CircleButton />
          <CircleButton />
        </div>
      </div>
      <div className="question-card-content">
        <div className="question-card-content-item">
          <p className="question-card-content-title">
            Enunciado
          </p>
          <p className="question-card-statement">Texto pregunta</p>
        </div>
        <div className="question-card-content-item">
          <p className="question-card-content-title">Tipo</p>
          <p className="question-card-statement">Enunciado</p>
        </div>
        <div className="question-card-content-item">
          <p className="question-card-content-title">Opciones</p>
          <ol className="question-card-content-item-list">
            <li className="question-card-content-item-list-option">
              <span>hola</span>
            </li>
            <li className="question-card-content-item-list-option">
              <span>como</span>
            </li>
            <li className="question-card-content-item-list-option">
              <span>estas</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
