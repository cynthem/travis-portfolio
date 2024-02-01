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
                <div className="position-section">
                    <h3>Warner Bros / Avalanche Software</h3>
                    <div className="position-details"></div>
                </div>
                <div className="position-section">
                    <h3>Warner Bros / Monolith Productions</h3>
                    <div className="position-details"></div>
                </div>
                <div className="position-section">
                    <h3>Warner Bros / Monolith Productions</h3>
                    <div className="position-details"></div>
                </div>
                <div className="position-section">
                    <h3>Ozone Interactive</h3>
                    <div className="position-details"></div>
                </div>
                <div className="position-section">
                    <h3>Warner Bros / Monolith Productions</h3>
                    <div className="position-details"></div>
                </div>
                <div className="position-section">
                    <h3>Ozone Interactive</h3>
                    <div className="position-details"></div>
                </div>
                <div className="position-section">
                    <h3>Fuelcell Games</h3>
                    <div className="position-details"></div>
                </div>
                <div className="position-section">
                    <h3>Surreal Software / Midway Seattle / Warner Bros Interactive Seattle</h3>
                    <div className="position-details"></div>
                    <div className="position-details"></div>
                    <div className="position-details"></div>
                </div>
                <div className="software-section">
                    <h3>SOFTWARE</h3>
                    <div className="software-grid">
                        <p>Maya</p>
                        <p>MotionBuilder</p>
                        <p>Unreal</p>
                        <p>Premiere</p>
                        <p>Nuke</p>
                        <p>Photoshop</p>
                        <p>Python</p>
                        <p>After Effects</p>
                        <p>Proprietary Engines</p>
                        <p>Perforce</p>
                        <p>ShotGrid</p>
                    </div>
                </div>
                <div className="education-section">
                    <h3>EDUCATION</h3>
                    <p>Art Institute Seattle AAA Computer Animation</p>
                </div>
            </div>
        </div>
    );
}