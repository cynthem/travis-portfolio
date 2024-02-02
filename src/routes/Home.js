import React from "react";
import uniqid from "uniqid";
import ProjectContainer from "../components/ProjectContainer";
import projectList from "../util/projectList";
import Project1 from "../assets/images/Home_Background.png";

const parallaxImages = [
    {
        parallax: Project1,
        
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