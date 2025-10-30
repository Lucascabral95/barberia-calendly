import { FC } from 'react'

interface MapEmbedProps {
  embedUrl: string
  title: string
}

const MapEmbed: FC<MapEmbedProps> = ({ embedUrl, title }) => {
  return (
    <div className="nuestra-ubicacion" id="visitanos">
      <iframe
        src={embedUrl}
        className="ubicacion-detallada"
        title={title}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default MapEmbed
