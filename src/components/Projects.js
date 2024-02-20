import React from "react";

export default function Projects({ preview }) {
    const overlayOpacity = {
        backgroundColor: preview.opacity || 'rgba(0, 0, 0, 0.3)'
    }

    return (
        <div className="project">
            {preview.art 
                ? <div className="older-projects">
                    <a
                        className="description-link"
                        href={preview.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            className="link-image"
                            src={preview.image} 
                            alt="Cinematic scene" 
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
                
                : <div className="current-project">
                    <h3>{preview.name}</h3>
                    <iframe
                        className="youtube-link"
                        src={preview.link}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                    >
                    </iframe>
                </div>
            }
        </div>
    );
}