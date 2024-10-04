import './Header.scss'
import MenuHamburguesa from './MenuHamburguesa.jsx'

const Header = () => {
  return (
    <div className='nav-nav'>

      <div className="menu-burguer">
        <MenuHamburguesa />
      </div>

      <div className="navbar">
        <ul>
          <li>
            <a href='#bienvenido'> Bienvenido </a>
          </li>
          <li>
            <a href='#acercaDe'> Nosotros </a>
          </li>
          <li>
            <a href='#servicios'> Servicios </a>
          </li>
          <li>
            <a href='#reserva'> Reservá una cita </a>
          </li>
          <li>
            <a href='#visitanos'> Visítanos </a>
          </li>
        </ul>
      </div>
      <div className="div-presentacion">
        <div className="subtitulo">
          <h2> B A R B E R I A  P R O F E S I O N A L </h2>
        </div>
        <div className="titulo">
          <h1> I L F I G A R O </h1>
        </div>
        <div className="introduccion">
          <h3> Desde 2024 </h3>
        </div>
      </div>
    </div>
  )
}

export default Header