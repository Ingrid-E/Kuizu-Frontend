import React from 'react'
import { CreationCard } from '../../components'
import './creation-view.css'

const CreationView = ({ type, exit }) => {
  return (
    <div className='creation-view'>
        <CreationCard text={type} exit={(e) => exit(e)} />
    </div>
  )
}

export default CreationView