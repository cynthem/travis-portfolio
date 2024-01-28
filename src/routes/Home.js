import React from "react";
import uniqid from "uniqid";
import ProjectImage from "../components/ProjectImage";
import ProjectContainer from "../components/ProjectContainer";
import imageList from "../util/imageList";

export default function Home() {
    return (
        <div className="home">
            {imageList.map((image) => {
                return (
                    <ProjectImage 
                        key={uniqid()} 
                        image={image}
                    />
                );
            })}
        </div>
    );
}