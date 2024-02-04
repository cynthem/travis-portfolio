import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import ProjectContainer from "../components/ProjectContainer";
import projectList from "../util/projectList";

export default function Home() {
    const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setScreenSize(projectList.bkgrd1280);
            } else if (window.innerWidth >= 900 && window.innerWidth < 1280) {
                setScreenSize(projectList.bkgrd1020);
            } else if (window.innerWidth >= 700 && window.innerWidth < 900) {
                setScreenSize(projectList.bkgrd900);
            } else if (window.innerWidth < 700) {
                setScreenSize(projectList.bkgrd750);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="home">
            {projectList.map((projects) => {
                return (
                    <ProjectContainer
                        key={uniqid()}
                        projects={projects}
                        screenSize={screenSize}
                    />
                );
            })}
        </div>
    );
}