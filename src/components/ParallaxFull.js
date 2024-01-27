import React from "react";
import { Parallax } from "react-parallax";

export default function ParallaxFull() {
    return (
        <Parallax className="image-full" bgImage="" strength={500}>
            <div className="parallax-full"></div>
        </Parallax>
    );
}