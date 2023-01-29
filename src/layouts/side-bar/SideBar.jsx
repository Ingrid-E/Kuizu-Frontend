import React, { useRef, useState } from "react";
import { CircleImage } from "../../components";
import CreationView from "../creation-view/CreationView";
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';
import "./side-bar.css";

const SideBar = ({ user_img, firstname, lastname, rol, classText, hide}) => {
  const navigate = useNavigate()
  const [creationComponent, setCreationComponent] = useState("");

  function handleClick(e, creation) {
    e.preventDefault();
    setCreationComponent(creation);
    hide();
  }

  const type = (rol) => {
    if (rol == "teacher") {
      return "Docente";
    }
    if (rol == "student") {
      return "Estudiante";
    }
  };

  const handleExit = (e)=>{
    e.preventDefault()
    Cookies.remove('user')
    navigate('/')
  }

  return (
    <div className={classText}>
      <div className="side-bar-user-info">
        <CircleImage image={user_img} width="100px" height="100px" />
        <h2 className="side-bar-user-info-name">
          {firstname + " " + lastname}
        </h2>
        <h2 className="side-bar-user-info-rol">
          Rol:<span>{type(rol)}</span>
        </h2>
      </div>
      {rol === "teacher"? (
              <div className="side-bar-options">
              <button
                className="side-bar-options-option"
                onClick={(e) => handleClick(e, 'exam')}
              >
                <h2>Crear Examen</h2>
              </button>
              <button
                className="side-bar-options-option"
                onClick={(e) => handleClick(e, 'course')}
              >
                <h2>Crear Curso</h2>
              </button>
            </div>
      ):<div></div>}
      <button className="side-bar-log-out-button" onClick={(e) =>handleExit(e)}>Cerrar Sesion</button>
      {creationComponent === 'exam' || creationComponent === 'course' || creationComponent === 'question' ? (
        <div>
          <button className="creation-view-exit-button" onClick={(e) => handleClick(e, '')}>x</button>
          <CreationView type={creationComponent} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SideBar;
