import React from "react";
import uniqid from "uniqid";
import Projects from "../components/Projects";

export default function MobileProjects({ projects }) {
    return (
        <div className="mobile-project-container">
            <div className="mobile-projects-display">
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