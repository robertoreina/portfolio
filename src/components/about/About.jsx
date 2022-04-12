import React, { useContext } from 'react'
import Header from '../commons/Header';
import Footer from '../commons/Footer';
import CV_ES from "../../files/CV_Roberto_Reina_es.pdf";
import CV_EN from "../../files/CV_Roberto_Reina_en.pdf";
import LanguageContext from '../../context/LanguageContext';
import aboutData from '../../data/about';


function About() {
    const { language } = useContext(LanguageContext);

    return (
        <>
            <Header />
            <section id="about">
                <div className="about container">
                    <div className="col-left">
                        <div className="about-img">
                            <img src="../../images/Profile.jpeg" alt="img" />
                        </div>
                    </div>
                    <div className="col-right">
                        <h1 className="section-title">{aboutData.title[language]} <span>{aboutData.title2[language]}</span></h1>
                        <h2>{aboutData.profile[language]}</h2>
                        <p>{aboutData.about[language]}</p>
                        <a href={language === 'en' ? CV_EN : CV_ES} className="cta" target="_blank"
                            rel='noreferrer noopener' download>{aboutData.downloadLabel[language]}</a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About;
