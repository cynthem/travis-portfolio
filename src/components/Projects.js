import React from "react";

export default function Projects({ values }) {
    const overlayOpacity = {
        backgroundColor: values.opacity || 'rgba(0, 0, 0, 0.3)'
    }

    return (
        <div className="project">
            <a
                className="description-link"
                href={values.link}
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    className="link-image"
                    src={values.image} 
                    alt="Project image" 
                />
            </a>
            <div className="image-overlay" style={overlayOpacity}></div>
            <a className="description-text"
                href={values.link}
                target="_blank" 
                rel="noopener noreferrer"
            >
                {values.name}
            </a>
        </div>
    );
}