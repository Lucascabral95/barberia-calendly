import { FC } from 'react'
import { IoClose, IoMenuOutline } from 'react-icons/io5'
import { PopupButton } from 'react-calendly'
import { useMenu } from '../../hooks'
import { CALENDLY_CONFIG, NAVIGATION_LINKS_MOBILE } from '../../../infrasctruture/constants'
import './MenuHamburguesa.scss'

const MenuHamburguesa: FC = () => {
  const { showMenu, toggleMenu } = useMenu()

  return (
    <>
      <div
        className="menu-sin-habilitar"
        style={{ display: showMenu ? 'none' : 'flex' }}
      >
        <div className="reserva">
          {document.getElementById('root') && (
            <PopupButton
              className="boton-de-reservacion"
              url={CALENDLY_CONFIG.url}
              rootElement={document.getElementById('root')!}
              text={CALENDLY_CONFIG.buttonText}
            />
          )}
        </div>
        <button
          className="icono"
          onClick={toggleMenu}
          aria-label="Abrir menú"
          type="button"
        >
          <IoMenuOutline className="icon" />
        </button>
      </div>

      <nav
        className="menu-hamburguesa"
        style={{ display: showMenu ? 'block' : 'none' }}
        aria-label="Menú de navegación móvil"
      >
        <div className="contenedor-menu-boton">
          <button
            className="boton"
            onClick={toggleMenu}
            aria-label="Cerrar menú"
            type="button"
          >
            <IoClose className="iconoo" />
          </button>
        </div>
        <div className="categorias">
          <ul>
            {NAVIGATION_LINKS_MOBILE.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={toggleMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default MenuHamburguesa
