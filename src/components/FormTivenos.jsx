import React, { useEffect, useState } from 'react'
import '../assets/styles/formularioTivenos.scss'
import FormTittle from '../assets/images/FormTittle.png'
import { getCarrerasRequest } from '../services/TivenosService.js'

const FormTivenos = () => {

    const [carreras, setCarreras] = useState([])
    const [numToRemove, setNumToRemove] = useState(0);

    const getCarreras = async () => {
        const newCarreras = await getCarrerasRequest("PREGRADO")
        removeOptions(2) // Remove other careers
        setCarreras(newCarreras)
    }

    useEffect(() => {
        // getCarreras()
    }, [])

    // Remove an specific number of options within the select
    const removeOptions = (num) => {
        setNumToRemove(num);
    }



    return (
        <div className='ultimate-center'>
            <div className="form-tivenos-col oorder-md-1">
                <div className="form">
                    <form abframeid="iframe.0.45774745286665475" abineguid="7B546F1617514EE68AB117EDB550B6E4" action="https://crm.zoho.com/crm/WebToLeadForm" autoComplete="off" className="container-form" id="formFloating" method="POST" name="WebToLeads5370168000000865001" > {/* onSubmit="return validateForm()" */}
                        <input name="xnQsjsdp" hidden type="text" defaultValue="f2f15c138bae00b070981dce0a59e03f621d5f9283b7deda1321c00640874b01" />
                        <input id="zc_gad" name="zc_gad" type="hidden" defaultValue="" />
                        <input name="xmIwtLD" hidden type="text" defaultValue="066b5b5d8b4f815c7302aaa4362b260031f7896cc1ba86e0c295fe1137fcccab" />
                        <input name="actionType" hidden type="text" defaultValue="TGVhZHM=" />
                        <input name="returnURL" hidden type="text" defaultValue="https://pregrado.utec.net.pe/landings/admision/gracias" />

                        {/* <!-- Imagen encabezado --> */}
                        <div className="encabezadoform">
                            <img alt="title" className="titleform text-center" src={FormTittle} />
                        </div>

                        {/* <!-- Campo nombres --> */}
                        <div className="form-item">
                            <input className="form-text" id="First_Name" name="First Name" placeholder="Nombres (*)" type="text" />
                        </div>

                        {/* <!-- Campo apellidos --> */}
                        <div className="form-item main-column">
                            <div className="first-column">
                                <input className="form-text" id="Last_Name" name="Last Name" placeholder="Apellido Paterno (*)" type="text" />
                            </div>

                            <div className="second-column">
                                <input className="form-text" id="LEADCF2" name="LEADCF2" placeholder="Apellido Materno" type="text" />
                            </div>
                        </div>

                        {/* <!-- Campo tipo de documento --> */}
                        <div className="form-item">
                            <select className="form-select" id="LEADCF10" name="LEADCF10">
                                <option value="-None-">Tipo de documento (*)</option>
                                <option value="Carnet de Extranjería">Carnet de Extranjería</option>
                                <option value="Documento Nacional de Identidad (DNI)">Documento Nacional de Identidad (DNI)</option>
                                <option hidden value="Registro Único De Contribuyentes (RUC)">Registro Único De Contribuyentes (RUC)</option>
                                <option hidden value="Pasaporte">Pasaporte</option>
                            </select>
                        </div>

                        {/* <!-- Campo número de documento --> */}
                        <div className="form-item">
                            <input className="form-text" id="LEADCF13" name="LEADCF13" placeholder="Nro. de documento (*)" type="number" />
                        </div>

                        <div className="main-column form-item">
                            {/* <!-- Campo genero --> */}
                            <div className="first-column">
                                <select className="form-text" id="LEADCF194" name="LEADCF194">
                                    <option value="-None-">Género (*)</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                                </select>
                            </div>

                            {/* <!-- Campo Departamento --> */}
                            <div className="second-column">
                                <select className="form-text" id="LEADCF19" name="LEADCF19" type="text">
                                    <option value="-None-">Departamento (*)</option>
                                    <option value="Amazonas">Amazonas</option>
                                    <option value="Ancash">Ancash</option>
                                    <option value="Apurímac">Apurímac</option>
                                    <option value="Arequipa">Arequipa</option>
                                    <option value="Ayacucho">Ayacucho</option>
                                    <option value="Cajamarca">Cajamarca</option>
                                    <option value="Callao">Callao</option>
                                    <option value="Cusco">Cusco</option>
                                    <option value="Huancavelica">Huancavelica</option>
                                    <option value="Huánuco">Huánuco</option><option value="Ica">Ica</option>
                                    <option value="Junín">Junín</option><option value="La Libertad">La Libertad</option>
                                    <option value="Lambayeque">Lambayeque</option><option value="Lima">Lima</option>
                                    <option value="Loreto">Loreto</option><option value="Madre de Dios">Madre de Dios</option>
                                    <option value="Moquegua">Moquegua</option><option value="Pasco">Pasco</option>
                                    <option value="Piura">Piura</option><option value="Puno">Puno</option>
                                    <option value="San Martín">San Martín</option><option value="Tacna">Tacna</option>
                                    <option value="Tumbes">Tumbes</option><option value="Ucayali">Ucayali</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- Campo correo electrónico --> */}
                        <div className="form-item">
                            <input className="form-text" id="Email" name="Email" placeholder="Correo electrónico (*)" type="text" />
                        </div>

                        <div className="main-column form-item">
                            {/* <!-- Campo celular --> */}
                            <div className="first-column">
                                <input className="form-text" id="Mobile" name="Mobile" pattern="/(9)\d{9}/" placeholder="Celular (*)" type="number" />
                            </div>

                            {/* <!-- Campo año de estudio --> */}
                            <div className="second-column">
                                <select className="form-text" id="LEADCF173" name="LEADCF173">
                                    <option value="-None-">Año de estudio (*)</option>
                                    <option value="1er Año">1er Año</option>
                                    <option value="2do Año">2do Año</option>
                                    <option value="3er Año">3er Año</option>
                                    <option value="4to Año">4to Año</option>
                                    <option value="5to Año">5to Año</option>
                                    <option value="Egresado">Egresado</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- Campo hidden unidad de negocio -->  */}
                        <select className="largo estilo" hidden id="LEADCF39" name="LEADCF39">
                            <option value="-None-">Seleccione una Unidad</option>
                            <option value="POSGRADO - EDUCACION CONTINUA">POSGRADO - EDUCACION CONTINUA</option>
                            <option value="POSGRADO - MAESTRÍAS">POSGRADO - MAESTRÍAS</option>
                            <option value="PREGRADO">PREGRADO</option>
                        </select>

                        {/* <!-- Campo Programa/Carrera de interes --> */}
                        <div className="form-item">
                            <select className="form-text" id="LEADCF151" name="LEADCF151" > {/* style="color: #a4a6a7 !important" type="text" */}
                                <option value="-None-">Carrera de interés (*)</option>
                                {
                                    carreras.map(({ value, label }, index) => {
                                        if (index < carreras.length - numToRemove) {
                                            return <option key={index} value={value}>{label}</option>
                                        }
                                    })
                                }
                            </select>
                        </div>

                        {/* <!-- Campo por implementar - Año de estudio proyectado --> */}
                        <select className="form-item" id="LEADCF304" name="LEADCF304" hidden>
                            <option value="-None-">Año de estudio planeado</option>
                        </select>

                        {/* <!-- Checkbox Acuerdos --> */}

                        <div className="labelsfooter">
                            <div className="form-item form-item-acepta-terminos form-type-checkbox">
                                <input id="check" name="terminos" type="checkbox" value="aceptoTerminos" /> {/* style="vertical-align: text-top" */}
                                <label className="caption-policy" htmlFor="check" id="label_check" > {/* style="vertical-align: super" */}
                                    He leído y acepto la
                                    <a href="https://utec.edu.pe/politica-de-privacidad" >Política de Privacidad</a> {/* style="color: #00bfff" target="_blank" */}
                                </label>
                                <span id="span-error-label_check" hidden>Información obligatoria</span></div>

                            <div className="form-item form-item-acepta-terminos form-type-checkbox">
                                <input id="checkEventos" name="sobreEventos" type="checkbox" value="aceptoEventosyProgramas" /> {/* style="vertical-align: text-top" */}
                                <label className="caption-policy text-left" htmlFor="checkEventos" id="label_check_eventos" > {/* style="vertical-align: top" */}
                                    Autorizo el envío de <a href="https://utec.edu.pe/consentimiento-uso-datos-personales" >publicidad e información comercial</a> {/* style="color: #00bfff" target="_blank" */}
                                </label>
                                <span id="span-error-label_check_eventos" hidden>Información obligatoria</span></div>
                        </div>
                        {/* <!---------------------------- CAMPOS OCULTOS -------------------------------------> */}

                        <div hidden>
                            <select id="Lead_Status" name="Lead Status">
                                <option defaultValue="Sin Gestión">Sin Gestión</option>
                            </select>

                            <select id="LEADCF3" name="LEADCF3">
                                <option defaultValue="Primer Ingreso">Primer Ingreso</option>
                            </select>

                            <select id="LEADCF25" name="LEADCF25">
                                <option defaultValue="Digital">Digital</option>
                            </select>

                            <select id="Lead_Source" name="Lead Source">
                                {/* <!-- <option selected="" value="Landing page">Landing page</option> --> */}
                            </select>

                            <input className="estilo" id="source_form" name="LEADCF175" placeholder="Source Form" type="text" />
                            <input className="UTM" id="utm_content" name="LEADCF152" type="text" />
                            <input className="UTM" id="utm_campaign" name="LEADCF14" type="text" />
                            <input className="UTM" id="utm_source" name="LEADCF17" type="text" />
                            <input className="UTM" id="utm_term" name="LEADCF18" type="text" />
                            <input className="UTM" id="utm_medium" name="LEADCF6" type="text" />
                        </div>

                        {/* <!-- Mensaje de error en los campos --> */}

                        {/* <!--------------------------- BOTONES ----------------------------------------------> */}

                        <div className="form-actions" > {/* style="text-align: -webkit-center !important;" */}
                            <button className="formsubmit zcwf_button webform-button--submit button button--primary js-form-submit form-submit btn-submit" id="formsubmit" title="Enviar" type="submit" value="Enviar">Enviar mis datos</button>
                            {/* <button className="zcwf_button" id="reset" name="reset" hidden title="Restablecer" type="reset" defaultValue="Restablecer">Restablecer</button> */}
                        </div>

                        {/* <!-- <script src="./formulario_general.js"></script> --> */}
                        {/* <!-- <script src="https://www.tivenoscloud.com/desarrollo/web_forms/utec/formulario_general.min.js"></script> --> */}
                        {/* <!-- <script src="/formulario_general.min.js"></script> --> */}

                        <script src="/sites/default/files/formularioGeneral.js"></script>
                        <select name="LEADCF218" hidden>
                            <option defaultValue="Si">Si</option>
                            <option defaultValue="No">No</option>
                        </select>

                        <select name="LEADCF214" hidden>
                            <option defaultValue="Si">Si</option>
                            <option defaultValue="No">No</option>
                        </select>

                        {/* <!-- Do not remove this --- Analytics Tracking code starts --> */}

                        <script id="wf_anal" src="./formulario_general_files/WebFormAnalyticsServeServlet"></script>

                        <div id="wf_tr_div_066b5b5d8b4f815c7302aaa4362b260031f7896cc1ba86e0c295fe1137fcccab">
                            <input name="te" type="hidden" defaultValue="true" />
                            <input id="webform_analytics_submission_066b5b5d8b4f815c7302aaa4362b260031f7896cc1ba86e0c295fe1137fcccab" name="webform_analytics_submission" type="hidden" defaultValue="" />
                            <input name="rw" type="hidden" defaultValue="61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a" />
                            <input name="la" type="hidden" defaultValue="0cf464d6861a382a9253d18d89c2e6e5" />
                            <input name="eo" type="hidden" defaultValue="14f4ec16431e0686150daa43f3210513" />
                            <img id="wf_tr_st_img_066b5b5d8b4f815c7302aaa4362b260031f7896cc1ba86e0c295fe1137fcccab" src="./formulario_general_files/WebFormAnalyticsServlet" hidden />
                            <img id="wf_tr_ab_img_066b5b5d8b4f815c7302aaa4362b260031f7896cc1ba86e0c295fe1137fcccab" hidden />
                            <img id="wf_tr_vi_img_066b5b5d8b4f815c7302aaa4362b260031f7896cc1ba86e0c295fe1137fcccab" src="./formulario_general_files/WebFormAnalyticsServlet(1)" hidden />
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default FormTivenos