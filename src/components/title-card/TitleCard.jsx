import React from "react";
import "./title-card.css";

const TitleCard = ({ title }) => {
  return (
    <div className="title-card">
      <h1 className="title-card-text">{title}</h1>
      <div className="title-card-circle"></div>
      <div className="title-card-circle"></div>
    </div>
  );
};

export default TitleCard;
