import React from 'react'
import './dashboard-heading.css'

const DashboardHeading = ({textNormal, textBold}) => {
  return (
    <div className='dashboard-heading'>
            <p className='dashboard-heading-title-normal'><em>{textNormal}</em></p>
            <h1 className='dashboard-heading-title-bold'>{textBold}</h1>
    </div>
  )
}

export default DashboardHeading