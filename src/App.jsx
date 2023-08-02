import React from 'react'
import ilustration from "./img/ilustration.svg";
import logo from "./img/logo.svg";
import therapy from "./img/therapy.svg";
import workshops from "./img/workshops.svg";
import flowerBackground from "./img/flowerBackground.svg";
import photography from "./img/photography.svg";
import ancestry from "./img/ancestry.svg";
import astrology from "./img/astrology.svg";
import rituals from "./img/rituals.svg";
import { BsChevronRight } from "react-icons/bs";
import "./App.css";

function App() {
  return (
    <>
      <div className="logos">

        <img src={logo} className="logo" alt="logo phrase" />
        <img src={ilustration} className="ilustration" alt="psychologist's ilutration" />

      </div>

      <div className="basicInformation">

        <h1> Una visión diferente de la Psicología </h1>
        <p> Mi propósito es que las personas tengan un espacio que les dé calma, donde puedan educarse para tener diversas herramientas sobre sanación emocional. </p>

      </div>

      <div className="resumeServices">

        <h1> Servicios </h1>

        <div className="therapy">

          <h2> Terapia Psicológica </h2>
          <p> Te acompaño en tu proceso de sanación desde una visión integral de lo que necesitas soltar y liberar.</p>
          <img src={therapy} className="imgTherapy" alt="two holding hands" />

          <button className="btn-therapy">
            Conoce más aquí <BsChevronRight />
          </button>

        </div>

        <div className="workshops">
          <h2> Talleres </h2>
          <p> Educación en antirracismo, género y procesos emocionales. Dirigido a corporaciones o de manera individual. </p>
          <img src={workshops} className="imgWorkshops" alt="hands" />

          <button className="btn-workshops">
            Conoce más aquí <BsChevronRight />
          </button>

        </div>

        <div className="psychologistResume">

          <img src={flowerBackground} className="flowerBackground" alt="green flowers background for the photography" />
          <img src={photography} className="photography" alt="psychologist's photograph" />

        </div>

        <h1> JAZMÍN REYES </h1>
        <p>
          ¡Hola! Soy Psicóloga Clínica egresada de la Universidad Peruana de
          Ciencias Aplicadas. Acompaño a las personas en sus procesos
          emocionales desde un enfoque antirracista de genero e inclusivo,
          principalmente a mujeres en toda su diversidad étnica-racial y sexual.
          Brindo herramientas de sanación a la ancestralidad, espiritual, el
          arte y de conexión con el cuerpo para soltar y liberar procesos
          emocionales.
        </p>

        <div className="iconsInformation">

          <h3> Ancestralidad </h3>
          <img src={ancestry} />
          <h3> Rituales </h3>
          <img src={rituals} />
          <h3> Astrología </h3>
          <img src={astrology} />

        </div>

      </div>
      {/* <button onClick={() => setCount((count) => count + 1)}> */}
      {/* count is {count} */}
      {/* </button> */}
    </>
  );
}
export default App;
