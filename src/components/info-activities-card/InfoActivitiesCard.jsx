import React from 'react'
import './info-activities-card.css'

const InfoActivitiesCard = ({ title, count }) => {
  return (
    <div className='info-activities-card'>
        <h2 className="info-activities-card-title">{title}</h2>
        <h1 className="info-activities-card-counter">{count}</h1>
        <div className="info-activities-card-circle"></div>
    </div>
  )
}

export default InfoActivitiesCard