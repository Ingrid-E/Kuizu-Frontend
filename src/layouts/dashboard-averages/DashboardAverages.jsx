import React from 'react'
import { AverageCard } from '../../components'
import './dashboard-averages.css'

const DashboardAverages = () => {
  return (
    <div className='dashboard-averages'>
        <h4>Promedios</h4>
        <div className='dashboard-averages__averages'>
            <AverageCard average='4,5' courseName='Programacion' />
            <AverageCard average='4,5' courseName='Programacion' />
            <AverageCard average='4,5' courseName='Programacion' />
            <AverageCard average='4,5' courseName='Programacion' />
            <AverageCard average='4,5' courseName='Programacion' />
            <AverageCard average='4,5' courseName='Programacion' />
            <AverageCard average='4,5' courseName='Programacion' />
            <AverageCard average='4,5' courseName='Programacion' />
            <AverageCard average='4,5' courseName='Programacion' />
            <AverageCard average='4,5' courseName='Programacion' />
            <AverageCard average='4,5' courseName='Programacion' />
        </div>
    </div>
  )
}

export default DashboardAverages