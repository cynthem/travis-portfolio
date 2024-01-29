import React from "react";
import uniqid from "uniqid";
import Project from "../components/Project";
import projectList from "../util/projectList";

export default function Home() {
    return (
        <div className="home">
            {projectList.map((project) => {
                return (
                    <Project 
                        key={uniqid()} 
                        project={project}
                    />
                );
            })}
        </div>
    );
}