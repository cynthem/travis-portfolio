import React from "react";
import { Parallax } from "react-parallax";
import uniqid from "uniqid";
import ProjectContainer from "../components/ProjectContainer";
import Project1 from "../assets/images/Home_Background.png";
import Project2 from "../assets/images/2018_Spring_1280.png";
import project_1 from "../util/project_1";
import project_2 from "../util/project_2";

const parallaxImages = [
    {
        parallax: Project1,
        projects: project_1
    },
    {
        parallax: Project2,
        projects: project_2
    }
];

export default function Home() {
    return (
        <div className="home">
            {parallaxImages.map((project) => {
                return (
                    <div className="project-container">
                        <Parallax className="project-image" bgImage={project.parallax} strength={400}></Parallax>

                        <ProjectContainer
                            key={uniqid()} 
                            projects={project.projects}
                        />
                    </div>
                );
            })}
        </div>
    );
}