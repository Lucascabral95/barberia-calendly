import { FC } from 'react'

import { SpecialOffer } from '../../../infrasctruture/interfaces'

interface SpecialOfferCardProps {
  offer: SpecialOffer
}

const SpecialOfferCard: FC<SpecialOfferCardProps> = ({ offer }) => {
  return (
    <div className="ofertas">
      <div className="ofertas-especiales">
        <div className="borde">
          <p className="titulo">{offer.title}</p>
          <div className="line">
            <div className="linea"></div>
          </div>
          <p className="servicios">{offer.services}</p>
          <p className="subtitulo">
            Por sólo <span>${offer.price.toLocaleString('es-AR')}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpecialOfferCard
