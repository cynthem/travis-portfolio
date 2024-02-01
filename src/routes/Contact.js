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
                <div className="contact-row">
                    <p className="contact-type">EMAIL</p>
                    <a href="mailto:travis@travisphelps.com">travis@travisphelps.com</a>
                </div>
                <div className="contact-row">
                    <p className="contact-type">PHONE</p>
                    <p className="phone">(253) 693-8362</p>
                </div>
                <div className="contact-row">
                    <p className="contact-type">LINKEDIN</p>
                    <a 
                        className="linkedin"
                        href="https://www.linkedin.com/in/travisphelps"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        LINKEDIN.COM/IN/TRAVISPHELPS
                    </a>
                </div>
                <div className="contact-row">
                    <p className="contact-type">INSTAGRAM</p>
                    <a 
                        className="instagram"
                        href="https://www.instagram.com/tjpdigital"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        TJPDIGITAL
                    </a>
                </div>
            </div>
        </div>
    );
}