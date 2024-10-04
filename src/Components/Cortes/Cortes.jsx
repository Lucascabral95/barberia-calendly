import "./Cortes.scss"
import React from 'react'
import ChildStructure from "../ChildComponents/ChildStructure/ChildStructure.jsx"
import CortesMobile from "./CortesMobile.jsx"
import JSONCortes from "../../JSON/Cortes.json"

const Cortes = () => {
    return (
        <>
            <div className="cortes" id="servicios">

                <CortesMobile />

                <ChildStructure>
                    <div className="contenedor">
                        <div className="cont">
                            <h3>¡Descubrí lo que podemos hacer por vos!</h3>
                            <h2> Servicios </h2>
                        </div>
                    </div>
                    <div className="cortes-album">
                        {JSONCortes.map((corte, index) => (
                            <div className="corte" key={index}>
                                <div className="imagen-corte">
                                    <img src={corte.imagen} alt={corte.nombre} />
                                </div>
                                <div className="titulo">
                                    <p>{corte.nombre}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ChildStructure>
            </div>
        </>
    )
}

export default Cortes