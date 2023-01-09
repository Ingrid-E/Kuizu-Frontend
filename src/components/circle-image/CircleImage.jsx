import React from 'react'
import './circle-image.css'

const CircleImage = ({ width, height, image}) => {

  const styles = {
    backgroundImage: `url(${image})`,
    width: `${width}`,
    height: `${height}`,
    minWidth: `${width}`,
    minHeight: `${height}`
  };

  return (
    <a className='circle-image' style={styles} href=""></a>
  )
}

export default CircleImage