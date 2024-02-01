import React from "react";
import { Parallax } from "react-parallax";
import contactBackground from "../assets/images/art/Contact_Background.png";

export default function Contact() {
    return (
        <div className="contact">
            <Parallax className="contact-image" bgImage={contactBackground} strength={400}>
                <div className="transition-overlay"></div>
            </Parallax>
            <div className="contact-content">
                content here
            </div>
        </div>
    );
}