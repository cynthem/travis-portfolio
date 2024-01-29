import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";

export default function Project({ image }) {
    return (
        <div className="project">
            <ProjectImage image={image} />
            <ProjectDescription />
        </div>
    );
}