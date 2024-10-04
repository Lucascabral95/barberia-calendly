import React from 'react'
import { PopupWidget } from 'react-calendly'
import "./Calendly.scss"

const Calendly = () => {

    return (
        <>
            <PopupWidget
                url="https://calendly.com/edgardolucesss/turno-para-barberia"
                rootElement={document.getElementById("root")}
                text="Reservá tu turno acá!"
                textColor="#ffffff"
                color="#ED4B2B"
            />
        </>
    )
}

export default Calendly