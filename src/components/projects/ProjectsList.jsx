import React, { useContext } from 'react'
import data from '../../data/data';
import LanguageContext from '../../context/LanguageContext';

function ProjectsList() {
    const { language } = useContext(LanguageContext);

    return (
        <section id="projects">
            <div className="projects container">
                <div className="projects-header">
                    {language === 'en' ? <h1 className="section-title">Recent <span>Projects</span></h1>
                        : <h1 className="section-title"><span>Proyectos</span> Recientes</h1>}
            </div>
            <div className="all-projects">
                {data.map((data, index) => {
                    return (
                        <div className="project-item" key={index}>
                            <div className="project-info">
                                <h1>{data.name}</h1>
                                <h2><a href={data.url} target='_blank' rel="noopener, noreferrer">{language === 'en' ? "Enter here" : "Ingrese aqui"}</a></h2>
                                <p>{data.description[language]}</p>
                            </div>
                            <div className="project-img">
                                <img src={data.photo} alt={data.name} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </section >
    )
}

export default ProjectsList;
