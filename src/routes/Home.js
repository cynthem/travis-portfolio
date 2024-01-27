import React from "react";
import ParallaxFull from "../components/ParallaxFull";
import ProjectContainer from "../components/ProjectContainer";

export default function Home() {
    return (
        <div className="home">
            <ParallaxFull />
            <ProjectContainer />
        </div>
    );
}