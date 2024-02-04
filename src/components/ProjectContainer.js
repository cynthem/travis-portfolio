import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import uniqid from "uniqid";
import Projects from "./Projects";

export default function ProjectContainer({ projects }) {
    const [screenSize, setScreenSize] = useState(projects.bkgrdLg);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1250) {
                setScreenSize(projects.bkgrdLg);
            } else if (window.innerWidth < 1250) {
                setScreenSize(projects.bkgrdMed);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="project-container">
            <Parallax 
                className="project-image" 
                bgImage={screenSize}
                strength={400}
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