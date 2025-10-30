import { FC } from 'react'
import { ServicePrice } from '../../../infrasctruture/interfaces'

interface PriceListProps {
  prices: readonly ServicePrice[]
}

const PriceList: FC<PriceListProps> = ({ prices }) => {
  return (
    <div className="montos-precios">
      <div className="borde">
        {prices.map((service, index) => (
          <div className="guia" key={`${service.name}-${index}`}>
            <p>{service.name}</p>
            {index === 0 && <div className="linea"></div>}
            <p>{service.price.toLocaleString('es-AR')}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PriceList
