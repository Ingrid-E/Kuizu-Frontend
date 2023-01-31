import React from "react";
import "./title-card.css";

const TitleCard = ({ title }) => {
  return (
    <div className="title-card">
      <h4 className="title-card-text">{title}</h4>
      <div className="title-card-circle"></div>
      <div className="title-card-circle"></div>
    </div>
  );
};

export default TitleCard;
