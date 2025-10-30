import { FC } from 'react'

import { ABOUT_CONTENT, ABOUT_IMAGES, PRICE_LIST_HEADER, SERVICE_PRICES, SPECIAL_OFFER } from '../../../infrasctruture/constants'
import ChildStructure from '../ChildComponents/ChildStructure/ChildStructure'
import PriceList from '../PriceList/PriceList'
import SpecialOfferCard from '../SpecialOfferCard/SpecialOfferCard'
import './AboutMe.scss'
import AboutMeMobile from './AboutMeMobile'

const AboutMe: FC = () => {
  return (
    <section className="about">
      <div className="imagen-presentacion">
        <img
          className="imagen"
          src={ABOUT_IMAGES.presentation}
          alt="Presentación de barbería Il Figaro"
          loading="lazy"
        />
      </div>

      <AboutMeMobile />

      <ChildStructure>
        <article className="contenedor c-about-desktop" id="acercaDe">
          <div className="about-historia" id="nosotros">
            <img
              src={ABOUT_IMAGES.secondary}
              alt="Barbería profesional Il Figaro"
              className="imagen-corte"
              loading="lazy"
            />
          </div>

          <div className="detalles">
            <div className="div">
              <p className="historia-subtitulo">{ABOUT_CONTENT.subtitle}</p>
              <h2 className="historia-titulo">{ABOUT_CONTENT.title}</h2>
              <div className="linea"></div>
              <p className="historia-introduccion">{ABOUT_CONTENT.description}</p>
            </div>
          </div>
        </article>

        <section className="contenedor-precios">
          <div className="price">
            <div className="lista-precios">
              <div className="cont">
                <p className="subtitulo">{PRICE_LIST_HEADER.subtitle}</p>
                <h2 className="precio">{PRICE_LIST_HEADER.title}</h2>
                <div className="linea"></div>
                <p className="texto">{PRICE_LIST_HEADER.description}</p>
              </div>
            </div>

            <PriceList prices={SERVICE_PRICES} />
          </div>

          <SpecialOfferCard offer={SPECIAL_OFFER} />
        </section>
      </ChildStructure>
    </section>
  )
}

export default AboutMe
