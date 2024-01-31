import React from "react";
import { Parallax } from "react-parallax";

export default function Project({ project }) {
    const overlayOpacity1 = {
        backgroundColor: project.opacity1 || 'rgba(0, 0, 0, 0.3)'
    }

    const overlayOpacity2 = {
        backgroundColor: project.opacity2 || 'rgba(0, 0, 0, 0.3)'
    }

    return (
        <div className="project">
            <Parallax className="project-image" bgImage={project.bkgrd} strength={400}></Parallax>
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
                    <p className="description-text">{project.name1}</p>
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