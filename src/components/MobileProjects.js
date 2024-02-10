import React from "react";
import { Parallax } from "react-parallax";
import uniqid from "uniqid";
import Projects from "./Projects";

export default function MobileProjects({ projects }) {
    return (
        <div className="project-container">
            
            <Parallax 
                className="mobile-background" 
                bgImage={projects.bkgrd450}
                //strength={0}
            >
            </Parallax>

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