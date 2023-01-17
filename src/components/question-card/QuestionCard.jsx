import React, { useState } from "react";
import CircleButton from "../circle-button/CircleButton";
import "./question-card.css";

const QuestionCard = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = e => {
    setIsActive(current => !current);
  }

  return (
    <div className={isActive ? 'question-card active' : 'question-card'}>
      <div className="question-card-header">
        <h4 className="question-card-header-title">Pregunta 1</h4>
        <div className="question-card-header-buttons">
          <button className="question-card-header-buttons-button">a</button>
          <button className="question-card-header-buttons-button" onClick={handleClick}>a</button>
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
