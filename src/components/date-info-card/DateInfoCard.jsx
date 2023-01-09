import React from 'react'
import './date-info-card.css'

const DateInfoCard = ({ title, text}) => {
  return (
    <div className='date-info-card'>
        <h3 className='date-info-card-title'>{title}</h3>
        <p className='date-info-card-text'>{text}</p>
    </div>
  )
}

export default DateInfoCard