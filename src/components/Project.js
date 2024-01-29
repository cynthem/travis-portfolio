import React from "react";
import { Parallax } from "react-parallax";
import ProjectDescription from "./ProjectDescription";

export default function Project({ image }) {
    return (
        <div className="project">
            <ProjectImage image={image} />
            <ProjectDescription />
        </div>
    );
}