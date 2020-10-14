import React from 'react';

import {FiArrowRight} from 'react-icons/fi'
import { Link } from 'react-router-dom';


import '../styles/pages/landing.css';

import logoImg from '../images/logov.jpg';

function Landing() {
    return (
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>
   
          <main>
            <h1> Adote um amigo e mude uma vida! </h1>
            <p> Adote! Mas você também pode visitar, doar, divulgar Ongs e salvar muitas vidas!</p>
          </main>
   
          <div className="location">
            <strong>Guarulhos</strong>
            <span>São Paulo</span>
          </div>
   
          <Link to="/app" className="enter-app">
            <FiArrowRight size={30} color="rgba(0, 0, 0, 0.6)"/>
          </Link>
   
        </div>
       </div>

    );
}

export default Landing;