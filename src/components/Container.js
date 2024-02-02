import React from "react";
import { Parallax } from "react-parallax";
import uniqid from "uniqid";
import Projects from "./Projects";
import projectList from "../util/projectList";

export default function ProjectContainer({ projects }) {
    return (
        <div className="project-container">
            <Parallax className="project-image" bgImage={projects.bkgrd} strength={400}></Parallax>

            <div className="projects-display">
                {Object.values(projects.project).map((parts) => {
                    return (
                        <Projects 
                            key={uniqid()}
                            parts={parts}
                        />
                    );
                })}
            </div>
        </div>
    );
}