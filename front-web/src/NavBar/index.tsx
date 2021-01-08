import React from 'react'
import './styles.css'
import { ReactComponent as Logo } from './logo.svg'

const NavBar: React.FC = () => {
  return (
    <nav className="main-navbar">
      <Logo />
      <a href="home" className="logo-text">
        DS Delivery
      </a>
    </nav>
  )
}

export default NavBar
