import React from "react";

export default function Projects({ project }) {
    const overlayOpacity = {
        backgroundColor: project.opacity || 'rgba(0, 0, 0, 0.3)'
    }

    return (
        <div className="project">
            <a
                className="description-link"
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    className="link-image"
                    src={project.image} 
                    alt="Project image" 
                />
            </a>
            <div className="image-overlay" style={overlayOpacity}></div>
            <a className="description-text"
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer"
            >
                {project.name}
            </a>
        </div>
    );
}