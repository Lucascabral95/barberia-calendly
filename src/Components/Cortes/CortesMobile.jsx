import Cortes from '../../JSON/Cortes.json'

const CortesMobile = () => {
    return (
        <div id='servicios' className='cortes-mobile'>
            <div className="contenedor-titulo">
                <p className="subtitulo"> ¡Descubrí lo que podemos hacer por vos! </p>
                <p className="titulo"> Servicios</p>
            </div>
            <div className="todos-los-servicios">
                {Cortes.map((corte, index) => (
                    <div className="contenedorr" key={index}>
                        <div className="corte">
                            <div className="imagen-corte">
                                <img src={corte.imagen} alt={corte.nombre} />
                            </div>
                            <div className="titulo">
                                <p>{corte.nombre}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CortesMobile;