import React from "react";
import { Parallax } from "react-parallax";

export default function Project({ project }) {
    return (
        <div className="project">
            <Parallax className="project-image" bgImage={project.bkgrd} strength={400}></Parallax>
            <div className="project-description">
                <div className="description-details">
                    <img 
                        className="description-image" 
                        src={project.image1} 
                        alt="Project image" 
                    />
                    <p className="description-text">{project.name1}</p>
                </div>
                <div className="description-details">
                    <img 
                        className="description-image" 
                        src={project.image2} 
                        alt="Project image" 
                    />
                    <p className="description-text">{project.name2}</p>
                </div>
            </div>
        </div>
    );
}