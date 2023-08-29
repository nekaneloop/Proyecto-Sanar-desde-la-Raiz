import React from 'react'
import completeLogo from './img/completeLogo.svg'
import lineServices from './img/lineServices.svg'
import therapy from "./img/therapy.svg";
import workshops from "./img/workshops.svg";
import jazmin from "./img/jazmin.svg"
import ancestry from "./img/ancestry.svg";
import astrology from "./img/astrology.svg";
import rituals from "./img/rituals.svg";
import { BsChevronRight } from "react-icons/bs";
import "./styles/style.scss";


function App() {
  return (
    <>
      <div className="logos">

        <img src={completeLogo} className="logo" alt="logo" />

        <div className="basicInformation">

          <h1> Una visión diferente de la Psicología </h1>
          <p> Mi propósito es que las personas tengan un espacio que les dé calma, donde puedan educarse para tener diversas herramientas sobre sanación emocional. </p>

        </div>
      </div>


      <div className="resume">

        <div className='allServices'>
          <h1> Servicios </h1>
          <img src={lineServices} className='line' />
        </div>

        <div className="therapy">

          <div className='infoT'>
            <h2> Terapia Psicológica </h2>
            <p> Te acompaño en tu proceso de sanación desde una visión integral de lo que necesitas soltar y liberar.</p>
          </div>

          <img src={therapy} className="imgTherapy" alt="two holding hands" />

          <button className="btn-therapy">
            Conoce más aquí <BsChevronRight fill='#E66353' />
          </button>

        </div>

        <div className='resumeW'>
          
          <div className="workshops">
            <h2> Talleres </h2>
            <p> Educación en antirracismo, género y procesos emocionales. Dirigido a corporaciones o de manera individual. </p>
          </div>

          <img src={workshops} className="imgWorkshops" alt="hands" />

          <button className="btn-workshops">
            Conoce más aquí <BsChevronRight fill='#E66353' />
          </button>

        </div>

        <div className="psychologistResume">
          <img src={jazmin} className="photography" alt="psychologist's photograph" />

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

          <img src={ancestry} />
          <img src={rituals} />
          <img src={astrology} />

          <h3> Ancestralidad </h3>
          <h3> Rituales </h3>
          <h3> Astrología </h3>

        </div>

      </div>
      {/* <button onClick={() => setCount((count) => count + 1)}> */}
      {/* count is {count} */}
      {/* </button> */}
    </>
  );
}
export default App;
