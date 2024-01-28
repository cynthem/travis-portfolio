import React from "react";
import { Parallax } from "react-parallax";
import imageList from "../util/imageList";

export default function ParallaxFull() {
    return (
        <Parallax className="image-full" bgImage={imageList[0]} strength={500}></Parallax>
    );
}