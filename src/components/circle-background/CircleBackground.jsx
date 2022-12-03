import React from 'react'
import './circle-background.css'

const CircleBackground = () => {
  return (
    <svg id='circle-background'>
        <circle className='circle-solid' r="50%" cx="50%" cy="50%" />
        <circle className='circle-stroke' r="54%" cx="50%" cy="50%" />
    </svg>
  )
}

export default CircleBackground