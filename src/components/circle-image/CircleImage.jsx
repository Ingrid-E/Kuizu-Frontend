import React from 'react'
import './circle-image.css'

const CircleImage = ({ style, image}) => {

  const imageUrl = {
    backgroundImage: `url(${image})`
  };

  return (
    <a className='circle-image' style={imageUrl} href=""></a>
  )
}

export default CircleImage