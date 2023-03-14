import React from "react";
import "../assets/styles/porqueElegirnos.scss";

const PorqueElegirnos = (props) => {
    const { imagenPrincipal, flechaIzq, flechaDer, iconGlobal } = props;

    return (
        <div id="porque-elegirnos">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid py-28 justify-items-center">
                <img className="w-100" src={imagenPrincipal} alt="" />
                <div className="flex gap-8 text-center px-4 sm:px-10 py-3 bg-[#ffc107] rounded-lg">
                    <img className="w-48 arrowLeft" src={flechaIzq} alt="" />
                    <h2 className="text-2xl font-bold uppercase">¿Porque Elegir UTEC?</h2>
                    <img className="w-48 arrowRight" src={flechaDer} alt="" />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-10 text-center pt-20 pb-10 lg:px-36 md:px-4">
                    <div>
                        <img className="w-40 mx-auto" src={iconGlobal} alt="" />
                        <div className="pt-4">
                            <h2 className="lg:text-2xl md:text-xl font-semibold">UTEC GLOBAL</h2>
                        </div>
                        <div className="pt-4">
                            <span className="text-lg">Convenios internacionales con Harvard, Purdue, MIT, Duke y +</span>
                        </div>
                    </div>
                    <div>
                        <img className="w-40 mx-auto" src={iconGlobal} alt="" />
                        <div className="pt-4">
                            <h2 className="lg:text-2xl md:text-xl font-semibold">EMPLEABILIDAD</h2>
                        </div>
                        <div className="pt-4">
                            <span className="text-lg">El 94% de nuestros egresados trabaja.</span>
                        </div>
                    </div>
                    <div>
                        <img className="w-40 mx-auto" src={iconGlobal} alt="" />
                        <div className="pt-4">
                            <h2 className="lg:text-2xl md:text-xl font-semibold">BIENESTAR ESTUDIANTIL</h2>
                        </div>
                        <div className="pt-4">
                            <span className="text-lg">Programas de coaching y mentoría que potencian el bienestar y desarrollo.</span>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-20 text-center pt-10 pb-10 lg:px-64 md:px-36">
                    <div>
                        <img className="w-40 mx-auto" src={iconGlobal} alt="" />
                        <div className="pt-4">
                            <h2 className="lg:text-2xl md:text-xl font-semibold">INNOVACIÓN</h2>
                        </div>
                        <div className="pt-4">
                            <span className="text-lg">Realizamos proyectos, investigaciones y emprendimientos.</span>
                        </div>
                    </div>
                    <div>
                        <img className="w-40 mx-auto" src={iconGlobal} alt="" />
                        <div className="pt-4">
                            <h2 className="lg:text-2xl md:text-xl font-semibold">INFRAESTRUCTURA</h2>
                        </div>
                        <div className="pt-4">
                            <span className="text-lg">Campus sostenible y laboratorios de última tecnología.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PorqueElegirnos;
