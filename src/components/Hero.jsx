import React from 'react'
import Logo from '../assets/images/LOGO-UTEC-B_h_0.png'
import FormTivenos from '../components/FormTivenos.jsx'
import '../assets/styles/hero.scss'

const Hero = (props) => {

    const { video_hero } = props

    return (
        <div id='hero'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 sm:grid-cols-1 gap-4 min-h-screen">
                <div className='container self-center z-10'>
                    <div className='lg:pb-16'>
                        <img className='lg:w-64 md:w-48 w-48' src={Logo} alt="Logo UTEC" />
                    </div>
                    <div className='lg:pt-8 lg:pr-36'>
                        <h2 className='text-white text-5xl font-bold text-slate-50'>QUE TU TALENTO TE LLEVE LEJOS</h2>
                    </div>
                    <div className='lg:pt-10 lg:pb-6 lg:pr-36  py-10'>
                        <span className='text-white text-xl'>Estudia Ingeniería, Tecnología o Negocios y construye un mundo mejor</span>
                    </div>
                    <div className='mb-6 py-3 lg:ml-1 lg:mr-36 md:mx-36 text-center bg-[#ffc107] rounded-lg'>
                        <span className='lg:text-2xl md:text-lg text-lg font-semibold'>EXAMEN DE ADMISIÓN: 4 DE MARZO</span>
                    </div>
                </div>
                <div className='self-center z-10'>
                    <FormTivenos />
                </div>
            </div>
            <div className="h-full w-full absolute left-0 top-0 overflow-hidden bg-center bg-cover">
                <video className='video-background relative w-full h-full top-1/2 left-1/2 object-cover -translate-y-2/4 -translate-x-2/4' loop muted autoPlay src={video_hero} type="video/webm" />
            </div>
        </div>
    )
}

export default Hero