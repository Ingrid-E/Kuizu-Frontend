import React from "react";
import { LineRule, TestCard } from "../../components";
import "./activities.css";

const Activities = () => {
  const test1 = {
    name: "Animales Salvajes",
    course: "Biologia",
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    grade: 4.8,
  };

  return (
    <div className="activities">
      <div className="activities-unfilled">
        <h4>Actividades pendientes</h4>
        <div className="container">
          <div className="content">
            <TestCard data={test1} />
            <LineRule />
            <TestCard data={test1} />
            <LineRule />
            <TestCard data={test1} />
            <LineRule />
            <TestCard data={test1} />
            <LineRule />
            <TestCard data={test1} />
          </div>
        </div>
      </div>
      <div className="activities-filled">
        <h4>Actividades entregadas</h4>
        <div className="container">
          <div className="content">
            <TestCard  data={test1} type="filled" />
            <LineRule />
            <TestCard type="graded"  data={test1} />
            <LineRule />
            <TestCard type="graded"  data={test1} />
            <LineRule />
            <TestCard type="filled"  data={test1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
