import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/kuizu-logo.png";
import { CircleImage, UserImage } from "../../components";
import MenuButton from "../../components/menu-button/MenuButton";
import CreationView from "../creation-view/CreationView";
import SideBar from "../side-bar/SideBar";
import "./navbar.css";

const Navbar = ({ user_img, firstname, lastname }) => {
  const user = useLocation().state.user;

  const [isActive, setIsActive] = useState(false);
  const [showX, setShowX] = useState(true)

  function handleClick(e) {
    e.preventDefault();
    setIsActive((current) => !current);
  }

  function hideX() {
    setShowX((current) => !current)
  }

  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="User image icon" />
      <div className="navbar__menu-buttons">
        <div className={isActive ? "navbar__menu-buttons-user hide" : "navbar__menu-buttons-user"}>
          <h2 className="navbar-username">
            {firstname} {lastname != null ? lastname : ""}
          </h2>
          <CircleImage image={user_img} width="50px" height="50px" />
        </div>
        <div
          className={isActive ? "menu-button active" : "menu-button"}
        >
          {showX ? <div className="menu-button-line" onClick={(e) => handleClick(e)}></div> : <div></div>}
          
          <SideBar
            classText={isActive ? "side-bar active" : "side-bar"}
            user_img={user.imgurl}
            firstname={user.firstname}
            lastname={user.lastname}
            rol={user.type}
            hide={hideX}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
