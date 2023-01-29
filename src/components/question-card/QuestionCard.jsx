import { faChevronLeft, faPencil } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect} from "react";
import { getQuestionInfo, getQuestionOptions } from "../../hooks/exam-hooks";
import CircleButton from "../circle-button/CircleButton";
import Icon from "../icon/Icon";
import "./question-card.css";

const QuestionCard = ({idQuestion, index}) => {

  const [isActive, setIsActive] = useState(false);
  const [question, setQuestion] = useState({})
  const [options, setOptions] = useState([])

  useEffect(()=>{
    handleQuestion(idQuestion)
  }, [])

  const handleClick = e => {
    setIsActive(current => !current);
  }

  const handleQuestion =async (id)=>{
    const questionInfo = await getQuestionInfo(id)
    setQuestion(questionInfo.data.data)
    const questionOptions = await getQuestionOptions(id)
    setOptions(questionOptions.data.data)
  }

  const renderOptions = options.map((option, index)=>
    <li className="question-card-content-item-list-option">
      <span>{option.description}</span>
    </li>
  )

  return (
    <div className={isActive ? 'question-card active' : 'question-card'}>
      <div className="question-card-header">
        <h4 className="question-card-header-title">Pregunta {index}</h4>
        <div className="question-card-header-buttons">
          <button className="question-card-header-buttons-button"><Icon css='question-card-icon-pencil' icon={faPencil} /></button>
          <button className="question-card-header-buttons-button" onClick={handleClick}><Icon css='question-card-icon-arrow-left' icon={faChevronLeft} /></button>
        </div>
      </div>
      <div className="question-card-content">
        <div className="question-card-content-item">
          <p className="question-card-content-title">
          {question.description}
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
            {renderOptions}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
