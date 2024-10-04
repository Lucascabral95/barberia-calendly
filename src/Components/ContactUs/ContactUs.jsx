import "./ContactUs.scss"
import ChildStructure from "../ChildComponents/ChildStructure/ChildStructure"
import { IoLogoFacebook, IoLogoInstagram, } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PopupButton } from 'react-calendly'
import ContactUsMobile from "./ContactUsMobile";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {

    const noDisponible = () => {
        toast.error('¡Pronto en línea!',
            {
                icon: '🏗️',
                duration: 3000,
                style: {
                    backgroundColor: "#F7F5F0",
                    color: "#414141",
                    fontWeight: "bolder",
                    fontSize: "16px"
                },
                position: 'bottom-left'
            }
        );
    }

    return (
        <div className="contactUs" id="reserva">

            <ContactUsMobile />

            <ChildStructure>
                <div className="contenedor-de-contacto">
                    <div className="contactanos">
                        <p className="subtitulo">Te invitamos a disfrutar de un excelente corte de pelo</p>
                        <h2 id="contacto" className="titulo">Contáctanos</h2>
                        <div className="linea"></div>
                        <div className="horario-direccion">
                            <div className="horario">
                                <p className="texto">HORARIO DE APERTURA</p>
                                <p className="texto">Lunes - Viernes: 9:00 - 20:00 </p>
                                <p className="texto">Sábado: 9:00 - 21:00</p>
                                <p className="texto">Domingo: Cerrado</p>
                            </div>
                            <div className="horario">
                                <p className="texto">NUESTRA DIRECCION</p>
                                <p className="texto">244 Avenida Acoyte</p>
                                <p className="texto">Cabellito, CABA 1405</p>
                                <p className="texto">Cel: 11-1111-1111</p>
                            </div>
                        </div>
                        <div className="boton-de-contacto">
                            <PopupButton
                                className='bot-contact'
                                url="https://calendly.com/edgardolucesss/turno-para-barberia"
                                rootElement={document.getElementById("root")}
                                text="Reservá tu turno"
                            />
                        </div>
                        <div className="redes-sociales">
                            <div className="redes">
                                <a onClick={noDisponible} style={{ cursor: 'pointer' }}>
                                    <IoLogoFacebook className="icon" />
                                </a>
                            </div>
                            <div className="redes">
                                <a onClick={noDisponible} style={{ cursor: 'pointer' }}>
                                    <FaSquareXTwitter className="icon" />
                                </a>
                            </div>
                            <div className="redes">
                                <a onClick={noDisponible} style={{ cursor: 'pointer' }}>
                                    <IoLogoInstagram className="icon" />
                                    <Toaster />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="nuestra-ubicacion" id="visitanos">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5624482193334!2d-58.44038588826946!3d-34.61522427283749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca404ec63db7%3A0xba89fa92f51220aa!2sAv.%20Acoyte%20244%2C%20C1405BGN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1724608684797!5m2!1ses-419!2sar"
                            className="ubicacion-detallada"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="fachada-del-local">
                        <img src="/public/img/barberia-nueve.webp"
                            alt="Fachada del local"
                            className="fachada" />
                    </div>
                </div>
            </ChildStructure>
        </div>
    )
}

export default ContactUs