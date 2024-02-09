import React from "react";

export default function ScrollButton() {
    const scrollToTop = () => {
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
        });
    }

    return (
        <div className="bottom-scroll"
            onClick={scrollToTop}
        >
            <button className="scroll-button">
                Scroll to Top
            </button>
        </div>
    );
}