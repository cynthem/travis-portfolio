import React from "react";

export default function Projects() {
    const overlayOpacity = {
        backgroundColor: project.opacity1 || 'rgba(0, 0, 0, 0.3)'
    }

    return (
        <div className="projects"></div>
    );
}

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