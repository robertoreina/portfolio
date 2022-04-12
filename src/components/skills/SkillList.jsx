import React from 'react';
import skillsData from '../../data/skillslist';

function ServiceList() {
    return (
        <section id="services">
        <div className="services container">
            <div className="service-top">
                <h1 className="section-title">Skil<span>l</span>s</h1>
            </div>
            <div className="service-bottom">
                {skillsData.map((skill, index) => {
                    return (
                        <div className="service-item" key={index}>
                            <div className="icon"><img src={skill.photo} alt={skill.name}/></div>
                            <h2>{skill.name}</h2>
                            <p>{skill.level}</p>
                        </div>    
                    );
                })}
            </div>
        </div>
    </section>
    )
}

export default ServiceList;
