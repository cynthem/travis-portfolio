import React from "react";

export default function Projects({ parts }) {
    const overlayOpacity = {
        backgroundColor: parts.opacity || 'rgba(0, 0, 0, 0.3)'
    }

    return (
        <div className="project">
            <a
                className="description-link"
                href={parts.link}
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    className="link-image"
                    src={parts.image} 
                    alt="Project image" 
                />
            </a>
            <div className="image-overlay" style={overlayOpacity}></div>
            <a className="description-text"
                href={parts.link}
                target="_blank" 
                rel="noopener noreferrer"
            >
                {parts.name}
            </a>
        </div>
    );
}