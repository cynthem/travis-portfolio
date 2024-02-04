import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import uniqid from "uniqid";
import Projects from "./Projects";

export default function ProjectContainer({ projects, screenSize }) {
    /*const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setScreenSize(projects.bkgrd1280);
            } else if (window.innerWidth >= 900 && window.innerWidth < 1280) {
                setScreenSize(projects.bkgrd1020);
            } else if (window.innerWidth >= 700 && window.innerWidth < 900) {
                setScreenSize(projects.bkgrd900);
            } else if (window.innerWidth < 700) {
                setScreenSize(projects.bkgrd750);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);*/

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