import React from "react";
import { Parallax } from "react-parallax";
import imageList from "../util/imageList";

export default function ProjectImage({ image }) {
    return (
        <Parallax className="project-image" bgImage={imageList[0]} strength={500}></Parallax>
    );
}