import React from 'react'
import { useState } from 'react'
import './menu-button.css'

const MenuButton = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = e => {
    setIsActive(current => !current);
  }

  return (
    <div className={isActive ? 'menu-button active' : 'menu-button'} onClick={handleClick}>
        <div className='menu-button-line'></div>
    </div>
  )
}

export default MenuButton