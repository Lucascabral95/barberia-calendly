import { FC } from 'react'

import { FOOTER_INFO } from '../../../infrasctruture/constants'
import ChildStructure from '../ChildComponents/ChildStructure/ChildStructure'
import './Footer.scss'

const Footer: FC = () => {
  const { year, companyName, developerName, developerUrl } = FOOTER_INFO

  const copyrightText = (
    <>
      © {year} by <span>{companyName}</span>.
    </>
  )

  const developerLink = (
    <a
      className="autor"
      href={developerUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar perfil de GitHub de ${developerName}`}
    >
      {developerName}
    </a>
  )

  return (
    <footer className="footer-container">
      <div className="footer-mobile">
        <p className="developed">
          {copyrightText} Powered and secured by {developerLink}
        </p>
      </div>

      <ChildStructure>
        <div className="contenedor">
          <p className="developed">
            {copyrightText} Developed and designed by {developerLink}
          </p>
        </div>
      </ChildStructure>
    </footer>
  )
}

export default Footer
