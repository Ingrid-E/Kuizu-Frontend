import React from 'react'
import { AverageCardCourse, InfoActivitiesCard, UserInfoCard } from '../../components'
import './course-info.css'

const CourseInfo = () => {
  return (
    <div className='course-info'>
        <h4 className="header">Informacion</h4>
        <div className='course-info-content'>
            <AverageCardCourse average='4,5' />
            <InfoActivitiesCard title='Actividades entregadas' count='5' />
            <InfoActivitiesCard title='Actividades pendientes' count='2' />
            <UserInfoCard name='John Doe Cardenas Perea' />
        </div>
    </div>
  )
}

export default CourseInfo