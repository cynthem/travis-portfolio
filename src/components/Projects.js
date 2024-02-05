import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

export default function Projects({ preview }) {
    const overlayOpacity = {
        backgroundColor: preview.opacity || 'rgba(0, 0, 0, 0.3)'
    }

    return (
        <div className="project">
            <a
                className="description-link"
                href={preview.link}
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    className="link-image"
                    src={preview.image} 
                    alt="Project image" 
                />
            </a>
            <div className="image-overlay" style={overlayOpacity}></div>
            <a className="description-text"
                href={preview.link}
                target="_blank" 
                rel="noopener noreferrer"
            >
                {preview.name}
            </a>
        </div>
    );
}