import React from "react";
import ProjectImage from "../components/ProjectImage";
import ProjectContainer from "../components/ProjectContainer";

export default function Home() {
    return (
        <div className="home">
            <ProjectImage />
            <ProjectContainer />
        </div>
    );
}