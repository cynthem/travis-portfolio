import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import uniqid from "uniqid";
import Projects from "./Projects";

export default function ProjectContainer({ projects, screenSize }) {
    const [resetScreenSize, setResetScreenSize] = useState(screenSize);
    const [imageSize, setImageSize] = useState();

    useEffect(() => {
        if (resetScreenSize >= 1280) {
            setImageSize(projects.bkgrd1280);
        } else if (resetScreenSize >= 850 && resetScreenSize < 1280) {
            setImageSize(projects.bkgrd1020);
        } else if (resetScreenSize >= 750 && resetScreenSize < 850) {
            setImageSize(projects.bkgrd900);
        } else if (resetScreenSize >= 550 && resetScreenSize < 750) {
            setImageSize(projects.bkgrd750);
        } else if (resetScreenSize < 550) {
            setImageSize(projects.bkgrd600)
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setImageSize(projects.bkgrd1280);
            } else if (window.innerWidth >= 850 && window.innerWidth < 1280) {
                setImageSize(projects.bkgrd1020);
            } else if (window.innerWidth >= 750 && window.innerWidth < 850) {
                setImageSize(projects.bkgrd900);
            } else if (resetScreenSize >= 550 && resetScreenSize < 750) {
                setImageSize(projects.bkgrd750);
            } else if (resetScreenSize < 550) {
                setImageSize(projects.bkgrd600)
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
                bgImage={imageSize}
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