import React from 'react'
import './button.css'

const Button = ({text, action}) => {
  return (
    <a className='button' onClick={action}><span className='button-content'>{text}</span><div className='button-circle'></div></a>
  )
}

export default Button