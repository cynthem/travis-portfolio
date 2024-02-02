import React from "react";

export default function Projects({ preview }) {
    const overlayOpacity = {
        backgroundColor: preview.project.opacity || 'rgba(0, 0, 0, 0.3)'
    }

    return (
        <div className="project">
            <a
                className="description-link"
                href={preview.project.link}
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    className="link-image"
                    src={preview.project.image} 
                    alt="Project image" 
                />
            </a>
            <div className="image-overlay" style={overlayOpacity}></div>
            <a className="description-text"
                href={preview.project.link}
                target="_blank" 
                rel="noopener noreferrer"
            >
                {preview.project.name}
            </a>
        </div>
    );
}