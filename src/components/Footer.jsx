import React from "react";
import "../assets/styles/footer.scss";

const Footer = (props) => {

    // const {  } = props;

    return (
        <footer id="footer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid py-28 text-center">
                <h2 className="text-lg font-semibold">Oficina de admisión: Jr. Medrano Silva 165, Barranco, Lima, Perú</h2>
                <h2 className="text-md font-semibold"><a href="tel:5112305020">(511)230-5020</a> <a href="5112305000">(511)230-5000</a> / informes@utec.edu.pe</h2>
            </div>
        </footer>
    );
};

export default Footer;
