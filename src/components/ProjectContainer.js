import React from "react";
import { Parallax } from "react-parallax";
import uniqid from "uniqid";
import Projects from "./Projects";

export default function ProjectContainer({ project }) {
    const overlayOpacity1 = {
        backgroundColor: project.opacity1 || 'rgba(0, 0, 0, 0.3)'
    }

    const overlayOpacity2 = {
        backgroundColor: project.opacity2 || 'rgba(0, 0, 0, 0.3)'
    }

    return (
        <div className="project-container">
            <Parallax className="project-image" bgImage={project.bkgrd} strength={400}></Parallax>

            <div className="project-display">


            </div>


            <div className="project-description">
                <div className="description-details">
                    <a 
                        className="description-link"
                        href={project.link1}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            className="link-image"
                            src={project.image1} 
                            alt="Project image" 
                        />
                    </a>
                    <div className="image-overlay" style={overlayOpacity1}></div>
                    <a className="description-text"
                        href={project.link1}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {project.name1}
                    </a>
                </div>
                <div className="description-details">
                    <a
                        className="description-link"
                        href={project.link2}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            className="link-image" 
                            src={project.image2} 
                            alt="Project image" 
                        />
                    </a>
                    <div className="image-overlay" style={overlayOpacity2}></div>
                    <p className="description-text">{project.name2}</p>
                </div>
            </div>
        </div>
    );
}