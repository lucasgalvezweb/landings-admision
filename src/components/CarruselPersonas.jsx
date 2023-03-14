import React from 'react'
import Slider from "react-slick"
import '../assets/styles/carruselPersonas.scss'

const CarruselPersonas = (props) => {

    const { foto1, foto2 } = props

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div id="carrusel-personas">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-28 justify-items-center"> {/* max-w-7xl mx-auto px-4 sm:px-6 grid py-28 justify-items-center */}
                <div className='text-center pb-10'>
                    <h2 className='text-[#00bfff] text-4xl font-semibold uppercase'>Nuestros estudiantes <span className='text-[#00000094]'>Son el centro de todo</span></h2>
                </div>
                <div className='w-9/12 mx-auto shadow-[-4px_5px_10px_5px_#e8e8e8]'>
                    <Slider {...settings}>
                        <div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-10 md:gap-0 lg:p-10 md:p-10 p-2">
                                <div>
                                    <img className='md:w-64 w-full mx-auto' src={foto1} alt="" />
                                </div>
                                <div className='lg:text-left md:text-center text-center col-span-2 place-self-center'>
                                    <h3 className='text-utec-cyan lg:text-4xl md:text-4xl text-2xl lg:pt-0 md:pt-4 pt-4 font-semibold uppercase'>Lucía Heredía</h3>
                                    <p className='text-lg font-semibold italic pb-4'>Estudiante de Ingeniería Mecatrónica</p>
                                    <p className='font-light'>"Aprenderás de los mejores profesores, ellos se esfuerzan por ayudarnos a crecer cada día más en nuestras carreras. ¡Hay muchos convenios internacionales que también nos ayudan a lograrlo"</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-10 md:gap-0 lg:p-10 md:p-10 p-2">
                                <div>
                                    <img className='md:w-64 w-full mx-auto' src={foto2} alt="" />
                                </div>
                                <div className='lg:text-left md:text-center text-center col-span-2 place-self-center'>
                                    <h3 className='text-utec-cyan lg:text-4xl md:text-4xl text-2xl lg:pt-0 md:pt-4 pt-4 font-semibold uppercase'>Danae Chipoco</h3>
                                    <p className='text-lg font-semibold italic pb-4'>Egresada de Ingeniería de la Energía</p>
                                    <p className='font-light'>“UTEC me ayudó a crecer en el ámbito profesional y personal y me permitió realizar dos pasantías de investigación en Alemania y Canadá. Estas experiencias me ayudaron a descubrir en qué me quería especializar y generó el ambiente propicio para crecer como investigadora”</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CarruselPersonas