import React, { useState } from 'react'
import '../assets/styles/experiencia.scss'
// import globe from '../assets/images/Globe&Loks.png'
import mapAnimation from '../assets/images/map_animation.gif'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import usaFlag from '../assets/images/flags/usa.jpg'

const Experiencia = (props) => {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div id='experiencia'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-28">
                    <div className='text-center'>
                        <h2 className='text-utec-dark text-4xl font-bold uppercase'>Experiencia <span className='text-utec-cyan'>Internacional</span></h2>
                    </div>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 pt-16'>
                        <div className=''>
                            <img className='w-full mx-auto' src={mapAnimation} alt="Logo UTEC" />
                        </div>
                        <div className='self-center '>
                            <div className='grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 lg:text-left md:text-center text-center'>
                                <div>
                                    <h2 className='text-utec-cyan text-4xl font-bold'>+ {counterOn && <CountUp end={700} duration={3} delay={0} />}</h2>
                                    <h2 className='text-utec-dark text-lg font-semibold'>ESTUDIANTES HAN TENIDO <br /> EXPERIENCIAS INTERNACIONALES</h2>
                                </div>
                                <div>
                                    <h2 className='text-utec-cyan text-4xl font-bold'>+ {counterOn && <CountUp end={250} duration={3} delay={0} />}</h2>
                                    <h2 className='text-utec-dark text-lg font-semibold'>ALUMNOS DE INTERCAMBIO ESTUDIARON EN UTEC</h2>
                                </div>
                                <div>
                                    <h2 className='text-utec-cyan text-4xl font-bold'>+ {counterOn && <CountUp end={30} duration={3} delay={0} />}</h2>
                                    <h2 className='text-utec-dark text-lg font-semibold'>CONVENIOS INTERNACIONALES</h2>
                                </div>
                            </div>
                            <div className='pt-10 lg:text-left md:text-center lg:pl-0'>
                                <ul className='text-utec-dark text-lg font-normal'>
                                    <li className='flex pb-2 lg:place-content-start lg:mx-0 md:mx-52 mx-8 items-center'>
                                        <img className='w-10 h-7' src={usaFlag} alt="Logo UTEC" />
                                        <h2 className='pl-4'>THE UNIVERSITY OF ARIZONA</h2>
                                    </li>
                                    <li className='flex pb-2 lg:place-content-start lg:mx-0 md:mx-52 mx-8 items-center'>
                                        <img className='w-10 h-7' src={usaFlag} alt="Logo UTEC" />
                                        <h2 className='pl-4'>UNIVERSITY OF CALIFORNIA, BERKELEY</h2>
                                    </li>
                                    <li className='flex pb-2 lg:place-content-start lg:mx-0 md:mx-52 mx-8 items-center'>
                                        <img className='w-10 h-7' src={usaFlag} alt="Logo UTEC" />
                                        <h2 className='pl-4'>UNIVERSIDADE DE SAO PAULO</h2>
                                    </li>
                                    <li className='flex pb-2 lg:place-content-start lg:mx-0 md:mx-52 mx-8 items-center'>
                                        <img className='w-10 h-7' src={usaFlag} alt="Logo UTEC" />
                                        <h2 className='pl-4'>UNIVERSITY OF LIVERPOOL</h2>
                                    </li>
                                    <li className='flex pb-2 lg:place-content-start lg:mx-0 md:mx-52 mx-8 items-center'>
                                        <img className='w-10 h-7' src={usaFlag} alt="Logo UTEC" />
                                        <h2 className='pl-4'>THE UNIVERSITY OF ARIZONA</h2>
                                    </li>
                                    <li className='flex pb-2 lg:place-content-start lg:mx-0 md:mx-52 mx-8 items-center'>
                                        <img className='w-10 h-7' src={usaFlag} alt="Logo UTEC" />
                                        <h2 className='pl-4'>XI’AN JIAOTONG UNIVERSITY</h2>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default Experiencia