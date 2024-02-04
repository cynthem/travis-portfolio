import React, { useRef, useLayoutEffect } from "react";
import uniqid from "uniqid";
import ProjectContainer from "../components/ProjectContainer";
import projectList from "../util/projectList";

export default function Home() {
    const ref = useRef(window.innerWidth);
    const [screenSize, setScreenSize] = useState(0);
    const [imageSize, setImageSize] = useState();

    useLayoutEffect(() => {
        const width = ref.current;
        setScreenSize(width);
    }, []);

    if (screenSize >= 1280) {
        setImageSize(projects.bkgrd1280);
    } else if (screenSize >= 900 && screenSize < 1280) {
        setImageSize(projects.bkgrd1020);
    } else if (screenSize >= 700 && screenSize < 900) {
        setImageSize(projects.bkgrd900);
    } else if (screenSize < 700) {
        setImageSize(projects.bkgrd750);
    }

    return (
        <div className="home">
            {projectList.map((projects) => {
                return (
                    <ProjectContainer
                        key={uniqid()}
                        projects={projects}
                        imageSize={imageSize}
                        contentRef={ref}
                    />
                );
            })}
        </div>
    );
}