import React, { useRef, useLayoutEffect } from "react";
import uniqid from "uniqid";
import ProjectContainer from "../components/ProjectContainer";
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
            {projectList.map((projects) => {
                return (
                    <ProjectContainer
                        key={uniqid()}
                        projects={projects}
                        screenSize={screenSize}
                        contentRef={ref}
                    />
                );
            })}
        </div>
    );
}