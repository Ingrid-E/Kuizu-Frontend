import React from 'react'
import { CreationCard } from '../../components'
import './creation-view.css'

const CreationView = ({ type }) => {
  return (
    <div className='creation-view'>
        <CreationCard text={type} />
    </div>
  )
}

export default CreationView