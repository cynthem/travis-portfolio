import React from "react";
import { Parallax } from "react-parallax";
import resumeBackground from "../assets/images/art/Resume_Background_1280.png";

export default function Resume() {
    return (
        <div className="resume">
            <Parallax className="resume-image" bgImage={resumeBackground} strength={400}>
                <div className="transition-overlay"></div>
            </Parallax>
            <div className="resume-content">
                <div className="position-section"></div>
                <div className="software-section"></div>
                <div className="education-section"></div>
            </div>
        </div>
    );
}