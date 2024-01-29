import React from "react";
import { Parallax } from "react-parallax";

export default function Project({ project }) {
    return (
        <div className="project">
            <Parallax className="project-image" bgImage={project.image} strength={500}></Parallax>
            <div className="project-description">
                This is the project: {project.name}
            </div>
        </div>
    );
}