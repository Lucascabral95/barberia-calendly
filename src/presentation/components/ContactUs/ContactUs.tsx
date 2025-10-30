import { FC } from 'react'
import { Toaster } from 'react-hot-toast'
import { PopupButton } from 'react-calendly'

import { BUSINESS_ADDRESS, BUSINESS_HOURS, CONTACT_HEADER, MAP_CONFIG, STORE_IMAGE } from '../../../infrasctruture/constants/constants.contact'
import ChildStructure from '../ChildComponents/ChildStructure/ChildStructure'
import { CALENDLY_CONFIG } from '../../../infrasctruture/constants'
import { SOCIAL_MEDIA } from '../../../infrasctruture/constants/constants.socialMedia'
import { showComingSoonToast } from '../../../infrasctruture/utils'
import MapEmbed from '../MapEmbed/MapEmbed'
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks'
import './ContactUs.scss'
import ContactUsMobile from './ContactUsMobile'

const ContactUs: FC = () => {
  const { subtitle, title } = CONTACT_HEADER

  return (
    <section className="contactUs" id="reserva">
      <ContactUsMobile />

      <ChildStructure>
        <div className="contenedor-de-contacto">
          <article className="contactanos">
            <p className="subtitulo">{subtitle}</p>
            <h2 id="contacto" className="titulo">{title}</h2>
            <div className="linea"></div>

            <div className="horario-direccion">
              <div className="horario">
                <p className="texto">HORARIO DE APERTURA</p>
                {BUSINESS_HOURS.map((schedule) => (
                  <p className="texto" key={schedule.day}>
                    {schedule.day}: {schedule.hours}
                  </p>
                ))}
              </div>

              <address className="horario">
                <p className="texto">NUESTRA DIRECCIÓN</p>
                <p className="texto">{BUSINESS_ADDRESS.street}</p>
                <p className="texto">{BUSINESS_ADDRESS.district}</p>
                <p className="texto">Cel: {BUSINESS_ADDRESS.phone}</p>
              </address>
            </div>

            <div className="boton-de-contacto">
              {document.getElementById('root') && (
                <PopupButton
                  className="bot-contact"
                  url={CALENDLY_CONFIG.url}
                  rootElement={document.getElementById('root')!}
                  text={CALENDLY_CONFIG.buttonText}
                />
              )}
            </div>

            <SocialMediaLinks
              socialMedia={SOCIAL_MEDIA}
              onUnavailableClick={showComingSoonToast}
            />
          </article>

          <MapEmbed
            embedUrl={MAP_CONFIG.embedUrl}
            title={MAP_CONFIG.title}
          />

          <figure className="fachada-del-local">
            <img
              src={STORE_IMAGE}
              alt="Fachada del local Il Figaro Barbería"
              className="fachada"
              loading="lazy"
            />
          </figure>
        </div>
      </ChildStructure>

      <Toaster />
    </section>
  )
}

export default ContactUs
