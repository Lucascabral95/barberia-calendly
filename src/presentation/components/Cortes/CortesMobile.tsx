import { FC } from 'react'

import ServiceCard from '../ServiceCard/ServiceCard'
import { SERVICES_TEXT } from '../../../infrasctruture/constants'
import { Corte } from '../../../infrasctruture/interfaces'
import cortesData from '../../../JSON/Cortes.json'

const CortesMobile: FC = () => {
  const cortes = cortesData as Corte[]
  const { subtitle, title } = SERVICES_TEXT

  return (
    <section id="servicios" className="cortes-mobile">
      <header className="contenedor-titulo">
        <p className="subtitulo">{subtitle}</p>
        <h2 className="titulo">{title}</h2>
      </header>

      <div className="todos-los-servicios">
        {cortes.map((corte, index) => (
          <div className="contenedorr" key={`${corte.nombre}-${index}`}>
            <ServiceCard corte={corte} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CortesMobile
