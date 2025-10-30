import React from 'react'

import { NAVIGATION_LINKS } from '../../../infrasctruture/constants'
import { BRANDING } from '../../../infrasctruture/constants/branding'
// import MenuHamburguesa from '../../../Components/Header/MenuHamburguesa'
import MenuHamburguesa from './MenuHamburguesa'
import './Header.scss'

const Header: React.FC = () => {
  return (
    <header className='nav-nav'>
      <div className="menu-burguer">
        <MenuHamburguesa />
      </div>

      <nav className="navbar" aria-label="Navegación principal">
        <ul>
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="div-presentacion">
        <div className="subtitulo">
          <h2>{BRANDING.subtitle}</h2>
        </div>
        <div className="titulo">
          <h1>{BRANDING.title}</h1>
        </div>
        <div className="introduccion">
          <h3>Desde {BRANDING.foundedYear}</h3>
        </div>
      </div>
    </header>
  )
}

export default Header
