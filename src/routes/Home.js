import React from "react";
import uniqid from "uniqid";
import Project from "../components/Project";
import imageList from "../util/imageList";

export default function Home() {
    return (
        <div className="home">
            {imageList.map((image) => {
                return (
                    <Project 
                        key={uniqid()} 
                        image={image}
                    />
                );
            })}
        </div>
    );
}