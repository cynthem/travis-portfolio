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
                {projectList.map(({ project }) => {
                    return (
                        <Projects 
                            key={uniqid()}
                            project={project}
                        />
                    );
                })}
            </div>
        </div>
    );
}