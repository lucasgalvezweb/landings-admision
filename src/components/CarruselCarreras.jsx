import React from 'react'
import Slider from "react-slick"
import '../assets/styles/carruselCarreras.scss'

const CarruselCarreras = (props) => {

    const { fotoCarrera1, fotoCarrera2 } = props

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        <div id="carrusel-carreras">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-28 justify-items-center"> {/* max-w-7xl mx-auto px-4 sm:px-6 grid py-28 justify-items-center */}
                <div className='text-center pb-10'>
                    <h2 className='text-white text-4xl font-semibold uppercase'>Nuestras <span className='text-utec-cyan'> carreras del futuro</span></h2>
                </div>
                <div className='w-9/12 mx-auto'>
                    <Slider {...settings}>
                        <div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 lg:gap-10 md:gap-10 text-center lg:p-10 md:p-10 p-2">
                                <div className='w-64 mx-auto text-center'>
                                    <img className='mx-auto' src={fotoCarrera1} alt="" />
                                    <h1 className='text-white text-2xl font-semibold uppercase pt-4'>Ingeniería Civil</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 lg:gap-10 md:gap-10 text-center lg:p-10 md:p-10 p-2">
                                <div className='w-64 mx-auto text-center'>
                                    <img className='mx-auto' src={fotoCarrera2} alt="" />
                                    <h1 className='text-white text-2xl font-semibold uppercase pt-4'>Ingeniería Industrial</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 lg:gap-10 md:gap-10 text-center lg:p-10 md:p-10 p-2">
                                <div className='w-64 mx-auto text-center'>
                                    <img className='mx-auto' src={fotoCarrera2} alt="" />
                                    <h1 className='text-white text-2xl font-semibold uppercase pt-4'>Ingeniería Industrial</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 lg:gap-10 md:gap-10 text-center lg:p-10 md:p-10 p-2">
                                <div className='w-64 mx-auto text-center'>
                                    <img className='mx-auto' src={fotoCarrera1} alt="" />
                                    <h1 className='text-white text-2xl font-semibold uppercase pt-4'>Ingeniería Civil</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 lg:gap-10 md:gap-10 text-center lg:p-10 md:p-10 p-2">
                                <div className='w-64 mx-auto text-center'>
                                    <img className='mx-auto' src={fotoCarrera2} alt="" />
                                    <h1 className='text-white text-2xl font-semibold uppercase pt-4'>Ingeniería Industrial</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 lg:gap-10 md:gap-10 text-center lg:p-10 md:p-10 p-2">
                                <div className='w-64 mx-auto text-center'>
                                    <img className='mx-auto' src={fotoCarrera2} alt="" />
                                    <h1 className='text-white text-2xl font-semibold uppercase pt-4'>Ingeniería Industrial</h1>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CarruselCarreras