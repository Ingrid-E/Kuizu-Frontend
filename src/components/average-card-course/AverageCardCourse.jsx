import React from 'react'
import './average-card-course.css'

const AverageCardCourse = ({ average }) => {
  return (
    <div className="average-card-course">
      <div className="average-card-course-data">
        <h1 className="average-card-course-data-title">{average}</h1>
        <p className="average-card-course-data-text">Promedio</p>
      </div>
      <div className="average-card-course-circle"></div>
    </div>
  );
}

export default AverageCardCourse