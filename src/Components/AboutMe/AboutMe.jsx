import './AboutMe.scss'
import React from 'react'
import ChildStructure from '../ChildComponents/ChildStructure/ChildStructure.jsx'
import AboutMeMobile from './AboutMeMobile.jsx'

const AboutMe = () => {
  return (
    <div className='about'>
      <div className="imagen-presentacion">
        <img className='imagen' src="/img/barberia-proyecto.jpg" alt="Presentacion" />
      </div>

      <AboutMeMobile />

        <ChildStructure >
          <div className="contenedor c-about-desktop" id='acercaDe'>
            <div className="about-historia" id='nosotros'>
              <img src="/img/barberia-proyecto-dos.jpg"
                alt="Corte"
                className="imagen-corte" />
            </div>

            <div className="detalles">
              <div className="div">
                <p className='historia-subtitulo'> Nuestra historia comienza en 2024 </p>
                <p className='historia-titulo'> Sobre nosotros </p>
                <div className="linea"></div>
                <p className='historia-introduccion'> Ofrecemos una amplia gama de servicios personalizados, desde cortes de cabello hasta arreglos de barba, todos diseñados para satisfacer tus necesidades específicas. Cada visita se caracteriza por nuestra atención al detalle y un compromiso inquebrantable con tu satisfacción. </p>
              </div>
            </div>
          </div>

          <div className="contenedor-precios">
            <div className="price">
              <div className="lista-precios">
                <div className="cont">
                  <p className='subtitulo'> Ofrecemos una variedad de servicios</p>
                  <p className='precio'>Lista de precios</p>
                  <div className="linea"></div>
                  <p className='texto'>Descubre nuestros servicios de barbería, diseñados para resaltar tu estilo personal y brindarte una experiencia excepcional. Desde cortes de cabello hasta afeitados, nuestro equipo de expertos te ayudará a lucir y sentirte genial.</p>
                </div>
              </div>
              <div className="montos-precios">
                <div className="borde">
                  <div className="guia">
                    <p> CORTE </p>
                    <div className="linea"></div>
                    <p> 7000 </p>
                  </div>
                  <div className="guia">
                    <p> AFEITADO </p>
                    <p> 5000 </p>
                  </div>
                  <div className="guia">
                    <p> RECORTE DE BARBA </p>
                    <p> 4000 </p>
                  </div>
                  <div className="guia">
                    <p> CORTE PARA NIÑOS </p>
                    <p> 6000 </p>
                  </div>
                  <div className="guia">
                    <p> CORTE PARA MAYORES </p>
                    <p> 6500 </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ofertas">
              <div className="ofertas-especiales">
                <div className="borde">
                  <p className="titulo">¡OFERTA!</p>
                  <div className="line">
                    <div className="linea"></div>
                  </div>
                  <p className="servicios"> CORTE + PEINADO + SECADO </p>
                  <p className="subtitulo"> Por sólo <span> $8500 </span> </p>
                </div>
              </div>
            </div>
          </div>
        </ChildStructure>

    </div>
  )
}

export default AboutMe;