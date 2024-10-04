const AboutMeMobile = () => {
    return (
        <div id='nosotros' className='aboutme-mobile' style={{ display: "none" }}>
            <div className="contenido">
                <p className="subtitulo"> Nuestra historia comienza en 2024 </p>
                <h2 className="titulo">Sobre nosotros</h2>
                <div className="linea"></div>
                <div className="texto"> Ofrecemos una amplia gama de servicios personalizados, desde cortes de cabello hasta arreglos de barba, todos diseñados para satisfacer tus necesidades específicas. Cada visita se caracteriza por nuestra atención al detalle y un compromiso inquebrantable con tu satisfacción. </div>
            </div>
            <div className="foto">
                <div className="imagen">
                    <img src="/img/barberia-poryecto-dos.jpg" alt="Corte de pelo" />
                </div>
            </div>

            <div className="ofertas-mobile">
                <div className="ofertas">
                    <p className="subtitulo"> Ofrecemos una variedad de servicios </p>
                    <h2 className="titulo">Lista de precios</h2>
                    <div className="linea"></div>
                    <p className="texto"> Descubre nuestros servicios de barbería, diseñados para resaltar tu estilo personal y brindarte una experiencia excepcional. Desde cortes de cabello hasta afeitados, nuestro equipo de expertos te ayudará a lucir y sentirte genial. </p>
                </div>
                <div className="precios">
                    <div className="contenedor">
                        <div className="detalle">
                            <div className="tipo-precio">
                                <p>CORTE</p>
                            </div>
                            <div className="tipo-precio">
                                <p>7000</p>
                            </div>
                        </div>
                        <div className="detalle">
                            <div className="tipo-precio">
                                <p>AFEITADO</p>
                            </div>
                            <div className="tipo-precio">
                                <p>5000</p>
                            </div>
                        </div>
                        <div className="detalle">
                            <div className="tipo-precio">
                                <p>RECORTE DE BARBA</p>
                            </div>
                            <div className="tipo-precio">
                                <p>4000</p>
                            </div>
                        </div>
                        <div className="detalle">
                            <div className="tipo-precio">
                                <p>CORTE PARA NIÑOS</p>
                            </div>
                            <div className="tipo-precio">
                                <p>6000</p>
                            </div>
                        </div>
                        <div className="detalle">
                            <div className="tipo-precio">
                                <p>CORTE PARA MAYORES</p>
                            </div>
                            <div className="tipo-precio">
                                <p>6500</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ofertas-especiales">
                    <div className="contenedor">
                        <div className="titulo">¡OFERTA!</div>
                        <div className="line">
                            <div className="linea"></div>
                        </div>
                        <p className="servicios">CORTE + PEINADO + SECADO</p>
                        <p className="exclusividad">Por sólo <span>$8500</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeMobile