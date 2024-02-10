import React, { useRef, useLayoutEffect, useState } from "react";
import uniqid from "uniqid";
import ProjectContainer from "../components/ProjectContainer";
import ScrollButton from "../components/ScrollButton";
import projectList from "../util/projectList";

export default function Home() {
    const ref = useRef(window.innerWidth);
    const [screenSize, setScreenSize] = useState(0);

    useLayoutEffect(() => {
        const width = ref.current;
        setScreenSize(width);
    }, []);

    return (
        <div className="home">
            {screenSize > 500 

                ? projectList.map((projects) => {
                    return (
                        <ProjectContainer
                            key={uniqid()}
                            projects={projects}
                            screenSize={screenSize}
                            contentRef={ref}
                        />
                    );
                })

                : <ScrollButton />
            }
            
            <ScrollButton />
        </div>
    );
}