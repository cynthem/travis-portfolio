import React from "react";
import { Parallax } from "react-parallax";

export default function ProjectImage({ image }) {
    return (
        <Parallax className="project-image" bgImage={image} strength={500}></Parallax>
    );
}