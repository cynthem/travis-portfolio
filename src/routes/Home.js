import React from "react";
import uniqid from "uniqid";
import ProjectContainer from "../components/ProjectContainer";
import projectList from "../util/projectList";
import Project1 from "../assets/images/Home_Background.png";
import Project2 from "../assets/images/2018_Spring_1280.png";
import project_1 from "../util/project_1";

const parallaxImages = [
    {
        parallax: Project1,
        projects: project_1
    },
    {
        parallax: Project2,
        projects:
    }
];

export default function Home() {
    return (
        <div className="home">
            {projectList.map((projects) => {
                return (
                    <ProjectContainer
                        key={uniqid()} 
                        projects={projects}
                    />
                );
            })}
        </div>
    );
}