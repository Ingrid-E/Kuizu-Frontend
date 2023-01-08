import React from "react";
import "./average-card.css";

const AverageCard = ({ average, courseName }) => {
  return (
    <a className="average-card" href="">
      <div className="average-card-data">
        <h1 className="average-card-data-title">{average}</h1>
        <p className="average-card-data-course">{courseName}</p>
      </div>
      <div className="average-card-circle"></div>
    </a>
  );
};

export default AverageCard;
