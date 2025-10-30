import { FC } from 'react'

import { SERVICES_TEXT } from '../../../infrasctruture/constants'
import { Corte } from '../../../infrasctruture/interfaces'
import cortesData from '../../../JSON/Cortes.json'
import CortesMobile from './CortesMobile'
import ChildStructure from '../ChildComponents/ChildStructure/ChildStructure'
import './Cortes.scss'

const Cortes: FC = () => {
  const cortes = cortesData as Corte[]
  const { subtitle, title } = SERVICES_TEXT

  return (
    <section className="cortes" id="servicios">
      <CortesMobile />

      <ChildStructure>
        <div className="contenedor">
          <div className="cont">
            <h3>{subtitle}</h3>
            <h2>{title}</h2>
          </div>
        </div>

        <div className="cortes-album">
          {cortes.map((corte, index) => (
            <article className="corte" key={`${corte.nombre}-${index}`}>
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
          ))}
        </div>
      </ChildStructure>
    </section>
  )
}

export default Cortes
