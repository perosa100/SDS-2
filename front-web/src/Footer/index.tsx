import React from 'react'
import { ReactComponent as Linkedin } from './Linkedin.svg'
import { ReactComponent as Youtube } from './Youtube.svg'
import { ReactComponent as Instagram } from './Instagram.svg'
import './styles.css'

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="foooter-icons">
        <a href="https://www.youtube.com/channel/UCrQVLMKECMHVijKAuHIZ-Cg">
          <Youtube />
        </a>
        <a href="https://www.linkedin.com/in/patrick-perosa-4950b434">
          <Linkedin />
        </a>
        <a href="https://www.instagram.com/patrickperosa">
          <Instagram />
        </a>
      </div>
    </footer>
  )
}

export default Footer
