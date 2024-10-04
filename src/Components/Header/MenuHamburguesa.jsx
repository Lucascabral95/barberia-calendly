import "./MenuHamburguesa.scss"
import { useState, useEffect } from 'react'
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { PopupButton } from 'react-calendly';

const MenuHamburguesa = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        document.body.style.overflow = isOpenMenu ? "hidden" : "unset";
    })

    return (
        <>
            <div className="menu-sin-habilitar" style={{ display: showMenu ? "none" : "flex" }} >
                <div className="reserva">
                    <PopupButton
                        className='boton-de-reservacion'
                        url="https://calendly.com/edgardolucesss/turno-para-barberia"
                        rootElement={document.getElementById("root")}
                        text="Reservá tu turno"
                    />
                </div>
                <div className="icono" >
                    <IoMenuOutline className="icon" onClick={() => { handleMenu(); setIsOpenMenu(!isOpenMenu) }} />
                </div>
            </div>
            <div className="menu-hamburguesa" style={{ display: showMenu ? "block" : "none" }}>
                <div className="contenedor-menu-boton" onClick={() => { handleMenu(); setIsOpenMenu(!isOpenMenu) }}>
                    <div className="boton">
                        <IoClose className="iconoo" />
                    </div>
                </div>
                <div className="categorias">
                    <ul>
                        <li onClick={() => { handleMenu(); setIsOpenMenu(!isOpenMenu) }}>
                            <a style={{ color: "var(--color-font-menu)" }} href="#bienvenido">Bievenido</a>
                        </li>
                        <li onClick={() => { handleMenu(); setIsOpenMenu(!isOpenMenu) }}>
                            <a href="#nosotros">Nosotros</a>
                        </li>
                        <li onClick={() => { handleMenu(); setIsOpenMenu(!isOpenMenu) }}>
                            <a href="#servicios">Servicios</a>
                        </li>
                        <li onClick={() => { handleMenu(); setIsOpenMenu(!isOpenMenu) }}>
                            <a href="#reserva">Reservá una cita</a>
                        </li>
                        <li onClick={() => { handleMenu(); setIsOpenMenu(!isOpenMenu) }}>
                            <a href="#visita"> Visítanos </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MenuHamburguesa