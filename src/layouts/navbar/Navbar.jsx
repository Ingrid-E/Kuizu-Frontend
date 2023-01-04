import React from 'react'
import logo from '../../assets/images/kuizu-logo.png'
import { CircleImage, UserImage } from '../../components'
import MenuButton from '../../components/menu-button/MenuButton'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='navbar__logo' src={logo} alt="" />
        <div className='navbar__menu-buttons'>
            <CircleImage image={'https://images.unsplash.com/photo-1646470350098-7966d0486d7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80'} />
            <MenuButton />
        </div>
    </div>
  )
}

export default Navbar