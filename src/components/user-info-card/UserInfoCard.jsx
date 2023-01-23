import React, {useEffect, useState} from "react";
import CircleImage from "../circle-image/CircleImage";
import "./user-info-card.css";
import { getUserInfo } from "../../hooks/course-hooks";

const UserInfoCard = ({name, type_id, type}) => {

  const [user, setUser] = useState({firstname:"---", lastname:"---", imgurl:""})

  useEffect(()=>{
    if(type_id != -1){
      handleUserInfo(type, type_id)
    }
  }, [type_id])

  const handleUserInfo= async(type, type_id)=>{
    const userResponse = await getUserInfo(type, type_id)
    console.log(userResponse.data.user)
    setUser(userResponse.data.user)
  }



  return (
    <div className="user-info-card">
      <CircleImage
          image={
           user.imgurl === ""? "":user.imgurl
          }
          width='125px'
          height='125px'
        />
      <div className="user-info-card-data">
        <div ></div>
        <h3 className="user-info-card-data-title">{type === "teacher"? "Docente":"Estudiante"}</h3>
        <h2 className="user-info-card-data-name">{user.firstname} {user.lastname != undefined? user.lastname:""}</h2>
      </div>
      <div className="user-info-card-circle"></div>
      <div className="user-info-card-circle"></div>
    </div>
  );
};

export default UserInfoCard;
