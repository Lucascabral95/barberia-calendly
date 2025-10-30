import { FC } from 'react'

import { SocialMedia } from '../../../infrasctruture/interfaces'

interface SocialMediaLinksProps {
  socialMedia: readonly SocialMedia[]
  onUnavailableClick: () => void
}

const SocialMediaLinks: FC<SocialMediaLinksProps> = ({ 
  socialMedia, 
  onUnavailableClick 
}) => {
  return (
    <div className="redes-sociales">
      {socialMedia.map((social) => (
        <div className="redes" key={social.name}>
          {social.available && social.url ? (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${social.name}`}
            >
              {social.icon}
            </a>
          ) : (
            <button
              onClick={onUnavailableClick}
              aria-label={`${social.name} - Próximamente disponible`}
              type="button"
              className="social-button"
            >
              {social.icon}
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default SocialMediaLinks
