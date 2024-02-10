import React from "react";
import uniqid from "uniqid";
import Projects from "./Projects";

export default function MobileProjects({ projects }) {
    return (
        <div className="project-container">
            <div 
                className="mobile-background" 
                style={{ backgroundImage: `url(${projects.bkgrd450})` }}
            >
            </div>

            <div className="projects-display">
                {projects.previews.map((preview) => {
                    return (
                        <Projects 
                            key={uniqid()}
                            preview={preview}
                        />
                    );
                })}
            </div>
        </div>
    );
}