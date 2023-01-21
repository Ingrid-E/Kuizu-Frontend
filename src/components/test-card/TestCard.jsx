import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CircleImage from "../circle-image/CircleImage";
import "./test-card.css";

const TestCard = ({ data, type }) => {

  const nav = useNavigate();
  const user = useLocation().state.user
  const imagePlaceholder = "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
  function handleClick() {
    nav('/dashboard-exam', {state: {user: user, info: data}});
  }

  if ((type == "filled")) {
    return (
      <a className="test-card" href="">
        <CircleImage width='50px' height='50px' image={imagePlaceholder} />
        <div className="test-card-data">
          <h3>{data.name}</h3>
          <div className="test-card-data-info">
            <h2>Asignatura:</h2>
            <p>{data.course_name}</p>
          </div>
        </div>
        <a className="test-card-button-text" href="">
          Sin calificar
        </a>
      </a>
    );
  }
  if ((type == "graded")) {
    return (
      <a className="test-card" href="">
        <CircleImage width='50px' height='50px' image={imagePlaceholder} />
        <div className="test-card-data">
          <h3>{data.name}</h3>
          <div className="test-card-data-info">
            <h2>Asignatura:</h2>
            <p>{data.course_name}</p>
          </div>
        </div>
        <a className="test-card-button-grade" href="">
          {data.grade}
        </a>
      </a>
    );
  }
  return (
    <div className="test-card">
      <CircleImage width='50px' height='50px' image={imagePlaceholder} />
      <div className="test-card-data">
        <h3>{data.name}</h3>
        <div className="test-card-data-info">
          <h2>Asignatura:</h2>
          <p>{data.course_name}</p>
        </div>
      </div>
      <a className="test-card-button" href="" onClick={handleClick}>
        Resolverlo
      </a>
    </div>
  );
};

export default TestCard;
