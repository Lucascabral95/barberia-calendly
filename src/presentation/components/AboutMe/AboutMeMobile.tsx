import { FC } from 'react'

import { ABOUT_CONTENT, ABOUT_IMAGES, PRICE_LIST_HEADER, SERVICE_PRICES, SPECIAL_OFFER } from '../../../infrasctruture/constants'
import PriceListMobile from '../PriceListMobile/PriceListMobile'

const AboutMeMobile: FC = () => {
  return (
    <section id="nosotros" className="aboutme-mobile" style={{ display: 'none' }}>
      <article className="contenido">
        <p className="subtitulo">{ABOUT_CONTENT.subtitle}</p>
        <h2 className="titulo">{ABOUT_CONTENT.title}</h2>
        <div className="linea"></div>
        <p className="texto">{ABOUT_CONTENT.description}</p>
      </article>

      <div className="foto">
        <div className="imagen">
          <img
            src={ABOUT_IMAGES.secondary}
            alt="Servicio de corte de pelo profesional"
            loading="lazy"
          />
        </div>
      </div>

      <section className="ofertas-mobile">
        <header className="ofertas">
          <p className="subtitulo">{PRICE_LIST_HEADER.subtitle}</p>
          <h2 className="titulo">{PRICE_LIST_HEADER.title}</h2>
          <div className="linea"></div>
          <p className="texto">{PRICE_LIST_HEADER.description}</p>
        </header>

        <PriceListMobile prices={SERVICE_PRICES} />

        <div className="ofertas-especiales">
          <div className="contenedor">
            <div className="titulo">{SPECIAL_OFFER.title}</div>
            <div className="line">
              <div className="linea"></div>
            </div>
            <p className="servicios">{SPECIAL_OFFER.services}</p>
            <p className="exclusividad">
              Por sólo <span>${SPECIAL_OFFER.price.toLocaleString('es-AR')}</span>
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutMeMobile
