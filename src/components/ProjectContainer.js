import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import uniqid from "uniqid";
import Projects from "./Projects";

export default function ProjectContainer({ projects, imageSize, contentRef }) {
    const [resetImageSize, setResetImageSize] = useState(imageSize.slice(1,1));

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setResetImageSize(projects.bkgrd1280);
            } else if (window.innerWidth >= 900 && window.innerWidth < 1280) {
                setResetImageSize(projects.bkgrd1020);
            } else if (window.innerWidth >= 700 && window.innerWidth < 900) {
                setResetImageSize(projects.bkgrd900);
            } else if (window.innerWidth < 700) {
                setResetImageSize(projects.bkgrd750);
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
                ref={contentRef}
                bgImage={resetImageSize}
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