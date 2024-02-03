import React from "react";
import uniqid from "uniqid";
import ProjectContainer from "../components/ProjectContainer";
import projectList from "../util/projectList";

export default function Home() {
    return (
        <div className="home">
            {projectList.map((projects) => {
                return (
                    <ProjectContainer
                        key={uniqid()} 
                        previews={projects.previews}
                    />
                );
            })}
        </div>
    );
}