import { FC } from 'react'

import { ServicePrice } from '../../../infrasctruture/interfaces'

interface PriceListMobileProps {
  prices: readonly ServicePrice[]
}

const PriceListMobile: FC<PriceListMobileProps> = ({ prices }) => {
  return (
    <div className="precios">
      <div className="contenedor">
        {prices.map((service, index) => (
          <div className="detalle" key={`${service.name}-${index}`}>
            <div className="tipo-precio">
              <p>{service.name}</p>
            </div>
            <div className="tipo-precio">
              <p>{service.price.toLocaleString('es-AR')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PriceListMobile
