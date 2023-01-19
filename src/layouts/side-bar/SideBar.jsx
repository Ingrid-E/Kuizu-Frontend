import React from "react";
import { CircleImage } from "../../components";
import "./side-bar.css";

const SideBar = ({ user_img, firstname, lastname, rol }) => {
  const type = (rol) => {
    if (rol == 'teacher') {
      return "Docente";
    }
    if (rol == 'student') {
      return "Estudiante";
    }
  };

  return (
    <div className="side-bar">
      <div className="side-bar-user-info">
        <CircleImage image={user_img} width="100px" height="100px" />
        <h2 className="side-bar-user-info-name">
          {firstname + " " + lastname}
        </h2>
        <h2 className="side-bar-user-info-rol">
          Rol:<span>{type(rol)}</span>
        </h2>
      </div>
      <div className="side-bar-options">
        <a className="side-bar-options-option" href=""><h2>Crear Examen</h2></a>
        <a className="side-bar-options-option" href=""><h2>Crear Curso</h2></a>
      </div>
      <button className="side-bar-log-out-button">Cerrar Sesion</button>
    </div>
  );
};

export default SideBar;
