import React from "react";
import CircleImage from "../circle-image/CircleImage";
import "./test-card.css";

const TestCard = ({ data, type, window}) => {

  const imagePlaceholder = "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"

  if ((type == "filled")) {
    return (
      <a className="test-card" href="">
        <CircleImage width='50px' height='50px' image={imagePlaceholder} />
        <div className="test-card-data">
          <h3>{data.name}</h3>
          {window === "dashboard"? (
                      <div className="test-card-data-info">
                      <h2>Asignatura:</h2>
                      <p>{data.course_name}</p>
                    </div>
          ):(<div></div>)}
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
          {window === "dashboard"? (
                      <div className="test-card-data-info">
                      <h2>Asignatura:</h2>
                      <p>{data.course_name}</p>
                    </div>
          ):(<div></div>)}
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
        {window === "dashboard"? (
                      <div className="test-card-data-info">
                      <h2>Asignatura:</h2>
                      <p>{data.course_name}</p>
                    </div>
          ):(<div></div>)}
      </div>
      <a className="test-card-button" >
        Resolverlo
      </a>
    </div>
  );
};

export default TestCard;
