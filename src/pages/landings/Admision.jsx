import React, { useEffect, useState } from "react";
import { getContentRequest } from "../../services/Content.js";
import Hero from "../../components/Hero.jsx";
import video_hero from "../../assets/video/video_hero.webm";
import PorqueElegirnos from "../../components/PorqueElegirnos.jsx";
import imagenPrincipal from "../../assets/images/campus.png";
import flechaIzq from "../../assets/images/ArrowsBarLeft.png";
import flechaDer from "../../assets/images/ArrowsBarRight.png";
import iconGlobal from "../../assets/images/IconGlobal.png";
import CarruselPersonas from "../../components/CarruselPersonas.jsx";
import foto1 from "../../assets/images/Lucia.png";
import foto2 from "../../assets/images/Danae.png";
import fotoCarrera1 from "../../assets/images/IngElek.png";
import fotoCarrera2 from "../../assets/images/IngQuimik.png";
import CarruselCarreras from "../../components/CarruselCarreras.jsx";
import Experiencia from "../../components/Experiencia.jsx";
import Footer from "../../components/Footer.jsx";

const Admision = () => {
  const [content, setContent] = useState([]);

  const getContent = async () => {
    const newContent = await getContentRequest();
    setContent(newContent);
  };

  console.log(content);

  useEffect(() => {
    // getContent()
  }, []);

  return (
    <div>
      <Hero video_hero={video_hero} />
      <PorqueElegirnos imagenPrincipal={imagenPrincipal} flechaIzq={flechaIzq} flechaDer={flechaDer} iconGlobal={iconGlobal}
      />
      <CarruselPersonas foto1={foto1} foto2={foto2} />
      <CarruselCarreras fotoCarrera1={fotoCarrera1} fotoCarrera2={fotoCarrera2} />
      <Experiencia />
      <Footer />
    </div>
  );
};

export default Admision;
