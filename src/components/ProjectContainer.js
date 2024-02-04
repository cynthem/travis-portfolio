import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Parallax } from "react-parallax";
import uniqid from "uniqid";
import Projects from "./Projects";

export default function ProjectContainer({ projects, screenSize, contentRef }) {
    //const ref = useRef(null);
    //const [screenSize, setScreenSize] = useState(0);
    const [imageSize, setImageSize] = useState();

    /*useLayoutEffect(() => {
        const width = ref.current;
        setScreenSize(width);
    }, []);*/

    useEffect(() => {
        const handleResize = () => {
            if (screenSize >= 1280) {
                setImageSize(projects.bkgrd1280);
            } else if (window.innerWidth >= 900 && window.innerWidth < 1280) {
                setImageSize(projects.bkgrd1020);
            } else if (window.innerWidth >= 700 && window.innerWidth < 900) {
                setImageSize(projects.bkgrd900);
            } else if (window.innerWidth < 700) {
                setImageSize(projects.bkgrd750);
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
                contentRef={ref}
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