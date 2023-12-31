import React from 'react'
import completeLogo from '../img/completeLogo.svg'
import lineServices from '../img/lineServices.svg'
import therapy from "../img/therapy.svg";
import workshops from "../img/workshops.svg";
import jazmin from "../img/jazmin.svg"
import ancestors from "../img/ancestors.svg";
import astro from "../img/astro.svg";
import ritual from "../img/ritual.svg";
import logoFooter from "../img/logoFooter.svg";
import footerIlustration from '../img/footerIlustration.svg';
import { BsChevronRight } from "react-icons/bs";
import "../styles/style.scss";


function Home() {

const clickAboutMe = () => {
    window.location.href= '/SobreMi';
}


  return (
    <>

    {/* Only HOME */}

      <div className="logos">

        <img src={completeLogo} className="logo" alt="logo" />

        <div className="basicInformation">

          <h1> Una visión diferente de la Psicología. </h1>
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
            <div className='infoT2'> 
            <h2> Terapia Psicológica </h2>
            <p> Te acompaño en tu proceso de sanación desde una visión integral de lo que necesitas soltar y liberar.</p>
            </div>
            <img src={therapy} className="imgTherapy" alt="two holding hands" />
          </div>
          
          <button className="btn-therapy">
            Conoce más aquí <BsChevronRight fill='#E66353' />
          </button>

        </div>

        <div className='resumeW'>

          <div className="workshops">
            <div className='workshops-two'>
            <h2> Talleres </h2>
            <p> Educación en antirracismo, género y procesos emocionales. Dirigido a corporaciones o de manera individual. </p>
            </div>
            <img src={workshops} className="imgWorkshops" alt="hands" />
          </div>

          <button className="btn-workshops">
            Conoce más aquí <BsChevronRight fill='#E66353'/>
          </button>

        </div>

        <div className="psychologistResume">
          
          <div className='jazmin-info'> 

          <img src={jazmin} className="jazmin" alt="psychologist's photograph" />
          <h1> JAZMÍN REYES </h1>

          </div>

        <p>
          ¡Hola! Soy Psicóloga Clínica egresada de la Universidad Peruana de
          Ciencias Aplicadas. Acompaño a las personas en sus procesos
          emocionales desde un enfoque antirracista de genero e inclusivo,
          principalmente a mujeres en toda su diversidad étnica-racial y sexual.
          Brindo herramientas de sanación a la ancestralidad, espiritual, el
          arte y de conexión con el cuerpo para soltar y liberar procesos
          emocionales.
        </p>

        </div>



        <div className="iconsInformation">

          <img src={ancestors} />
          <img src={ritual} />
          <img src={astro} />

        </div>

        <button className="btn-aboutMe" onClick={clickAboutMe}>
            Conóceme aquí <BsChevronRight fill='#E66353'/>
        </button>


        <div className='footer'>

          <div className='only-footer'>
          <img src={logoFooter} className='logoFooter' />
          <p> Una visión diferente de la Psicología. </p>
          <img src={footerIlustration} className='footerIlu'/>
          <h3> Sígueme en mis redes</h3> 
          </div>

        </div>
        </div>

      {/* <button onClick={() => setCount((count) => count + 1)}> */}
      {/* count is {count} */}
      {/* </button> */}
    </>
  );
}
export default Home;
