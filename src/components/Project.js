import React from "react";
import { Parallax } from "react-parallax";
import projectList from "../util/projectList";

export default function Project({ image }) {
    return (
        <div className="project">
            {projectList}
            <Parallax className="project-image" bgImage={image} strength={500}></Parallax>
            <div className="project-description">
                This is the project: 
            </div>
        </div>
    );
}