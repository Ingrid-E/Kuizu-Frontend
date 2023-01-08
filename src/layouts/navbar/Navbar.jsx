import React from 'react'
import logo from '../../assets/images/kuizu-logo.png'
import { CircleImage, UserImage } from '../../components'
import MenuButton from '../../components/menu-button/MenuButton'
import './navbar.css'

const Navbar = ({user_img}) => {
  return (
    <div className='navbar'>
        <img className='navbar__logo' src={logo} alt="User image icon" />
        <div className='navbar__menu-buttons'>
            <CircleImage image={user_img} />
            <MenuButton />
        </div>
    </div>
  )
}

export default Navbar