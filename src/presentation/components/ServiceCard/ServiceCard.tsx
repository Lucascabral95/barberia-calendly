import { FC } from 'react'

import { Corte } from '../../../infrasctruture/interfaces'
import '../Cortes/Cortes.scss'

interface ServiceCardProps {
  corte: Corte
}

const ServiceCard: FC<ServiceCardProps> = ({ corte }) => {
  return (
    <article className="corte">
      <div className="imagen-corte">
        <img
          src={corte.imagen}
          alt={`Servicio de ${corte.nombre}`}
          loading="lazy"
        />
      </div>
      <div className="titulo">
        <p>{corte.nombre}</p>
      </div>
    </article>
  )
}

export default ServiceCard
