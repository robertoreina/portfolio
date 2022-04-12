import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import LanguageContext from '../../context/LanguageContext';


function Hero() {
  const { language } = useContext(LanguageContext);

  return (
    <section id="hero">
      <div className="hero container">
        <div>
          <h1>{language === 'es' ? 'Hola' : 'Hello,'} <span></span></h1>
          <h1>{language === 'es' ? 'Mi nombre es' : 'My name is'}<span></span></h1>
          <h1>Roberto Reina Rodriguez<span></span></h1>
          <Link to="/projects" type="button" className="cta">{language === 'es' ? 'Proyectos' : 'Projects'}</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
