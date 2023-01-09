import React from "react";
import CircleImage from "../circle-image/CircleImage";
import "./user-info-card.css";

const UserInfoCard = ({ name }) => {
  return (
    <div className="user-info-card">
      <CircleImage
          image={
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          }
          width='125px'
          height='125px'
        />
      <div className="user-info-card-data">
        <div ></div>
        <h3 className="user-info-card-data-title">Docente</h3>
        <h2 className="user-info-card-data-name">{name}</h2>
      </div>
      <div className="user-info-card-circle"></div>
      <div className="user-info-card-circle"></div>
    </div>
  );
};

export default UserInfoCard;
