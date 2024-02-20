import React from "react";

export default function TopProject() {
    return (
        <div className="top-project">
            <h3 className="top-description-text">CURRENT PROJECT</h3>

            <iframe
                className="top-description-link"
                title="YouTube video player"
                src="https://www.youtube.com/embed/BtyBjOW8sGY?si=-aHRqSJXEeynQrJM"  
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            >
            </iframe>
        </div>
    );
}