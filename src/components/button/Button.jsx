import React from 'react'
import './button.css'

const Button = ({text}) => {
  return (
    <a className='button' href="#"><span className='button-content'>{text}</span><div className='button-circle'></div></a>
  )
}

export default Button