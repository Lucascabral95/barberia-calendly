import { FC } from 'react'
import { PopupButton } from 'react-calendly'
import { Toaster } from 'sonner'

import { CALENDLY_CONFIG } from '../../../infrasctruture/constants'
import { CONTACT_HEADER, BUSINESS_HOURS, BUSINESS_ADDRESS, MAP_CONFIG, STORE_IMAGE } from '../../../infrasctruture/constants/constants.contact'
import { SOCIAL_MEDIA } from '../../../infrasctruture/constants/constants.socialMedia'
import { showComingSoonSonner } from '../../../infrasctruture/utils/utils.sonner'
import MapEmbed from '../MapEmbed/MapEmbed'
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks'

const ContactUsMobile: FC = () => {
  return (
    <section className="contactUs-mobile">
      <article className="contacto-mobile">
        <p>¡Vení a conocernos!</p>
        <h2 className="titulo">{CONTACT_HEADER.title}</h2>
        <div className="linea"></div>

        <div className="boton-hora">
          <div className="diree">
            <div className="direccion-hora">
              <p className="tit">HORARIO DE APERTURA</p>
              {BUSINESS_HOURS.map((schedule) => (
                <p className="texto" key={schedule.day}>
                  {schedule.day}: {schedule.hours}
                </p>
              ))}
            </div>

            <address className="direccion-hora d-h-abajo">
              <p className="tit">NUESTRA DIRECCIÓN</p>
              <p className="texto">{BUSINESS_ADDRESS.street}</p>
              <p className="texto">{BUSINESS_ADDRESS.district}</p>
              <p className="texto">Cel: {BUSINESS_ADDRESS.phone}</p>
            </address>
          </div>

          <div className="boton-reserva-redes">
            <div className="boton">
              <PopupButton
                className="bot-contact"
                url={CALENDLY_CONFIG.url}
                rootElement={document.getElementById('root') as HTMLElement}
                text={CALENDLY_CONFIG.buttonText}
              />
            </div>

            <SocialMediaLinks
              socialMedia={SOCIAL_MEDIA}
              onUnavailableClick={showComingSoonSonner}
            />
          </div>
        </div>
      </article>

      <MapEmbed embedUrl={MAP_CONFIG.embedUrl} title={MAP_CONFIG.title} />

      <figure className="foto-fachada" id="visita">
        <img
          className="imagen"
          src={STORE_IMAGE}
          alt="Fachada del local Il Figaro Barbería"
          loading="lazy"
        />
      </figure>

      <Toaster />
    </section>
  )
}

export default ContactUsMobile
