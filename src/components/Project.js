import React from "react";
import { Parallax } from "react-parallax";

export default function Project({ project }) {
    return (
        <div className="project">
            <Parallax className="project-image" bgImage={project.bkgrd} strength={500}></Parallax>
            <div className="project-description">
                <div className="description-left">
                    <img src={project.image1} alt="Project image" />
                    <p>Project name: {project.name1}</p>
                </div>
                <div className="description-right">
                    <img src={project.image2} alt="Project image" />
                    <p>Project name: {project.name2}</p>
                </div>
            </div>
        </div>
    );
}