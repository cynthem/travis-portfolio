import React from "react";
import { Parallax } from "react-parallax";

export default function ParallaxHalf() {
    return (
        <Parallax className="image-half" bgImage="" strength={500}>
            <div className="parallax-half"></div>
        </Parallax>
    );
}