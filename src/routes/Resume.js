import React from "react";
import { Parallax } from "react-parallax";
import resumeBackground from "../assets/images/Resume_Background_1280.png";

export default function Resume() {
    return (
        <div className="resume">
            <Parallax className="resume-image" bgImage={resumeBackground} strength={400}>
                <div className="transition-overlay"></div>
            </Parallax>

            <div className="resume-content">
                <div className="position-section">
                    <h3>Warner Bros / Avalanche Software</h3>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title">Master Cinematic Artist</h4>
                            <p className="job-date">October 2019 - Current</p>
                        </div>
                        <div className="game-details">
                            <a 
                                className="game-name"
                                href="https://www.youtube.com/watch?v=BsC-Rl9GYy0&ab_channel=HogwartsLegacy"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                "Hogwarts Legacy"
                            </a>
                        </div>
                    </div>
                </div>

                <div className="position-section">
                    <h3>Warner Bros / Monolith Productions</h3>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title">Master Cinematic Artist</h4>
                            <p className="job-date">February 2015 - October 2019</p>
                        </div>
                        <div className="game-details">
                            <a 
                                className="game-name"
                                href="https://www.shadowofwar.com/purchase/"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                "Middle Earth: Shadow of War"
                            </a>
                            <div className="job-duties">
                                <h5>Content</h5>
                                <ul className="duties-list">
                                    <li>Personally completed 30 minutes of Motionbuilder previs & blockout  through to final camera polish.</li>
                                    <li>Our team completed over 2 hours of highly polished narrative cinematic content.</li>
                                    <li>Trusted with milestone scenes such as cinematic style-guide, quality bar benchmark, and vertical-slice.</li>
                                    <li>Carried out animation polish notes, performance modification, and bug fixes.</li>
                                    <li>Provided polish passes on additional layout content for impact, punch, or clarity.</li>
                                    <li>Used Nuke to tackle additional post effects.</li>
                                    <li>Pre-production work including storyboards, animatics and proof of concept videos.</li>
                                </ul>
                            </div>
                            <div className="job-duties">
                                <h5>Tech Art</h5>
                                <ul className="duties-list">
                                    <li>Developed the first Motionbuilder to Firebird Engine export pipeline tool including front-end UI and supplementary processing scripts.  </li>
                                    <li>Developed and maintained many additional Motionbuilder tools to assist with rapid scene iteration.</li>
                                    <li>Overhauled our offline rendering utility “Renderbot” to make it user friendly, faster, more versatile and reliable.</li>
                                    <li>Developed and maintained an updated camera rig and camera toolset used team-wide.</li>
                                    <li>Key point of contact and support with Autodesk in the development of a custom WB Motionbuilder build to better suit the team’s needs.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="game-details">
                            <a 
                                className="game-name"
                                href="https://www.youtube.com/watch?v=0vksOu7KSEw&ab_channel=ShadowofWar"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                “Middle Earth: Shadow of War - The Blade of Galadriel" (DLC)
                            </a>
                                <div className="job-duties">
                                    <h5>Content</h5>
                                    <ul className="duties-list">
                                        <li>Motionbuilder previs & blockout through to final camera polish.</li>
                                        <li>Additional body, creature, and prop animation in my layouts.</li>
                                    </ul>
                                </div>
                        </div>
                        <div className="game-details">
                            <a 
                                className="game-name"
                                href="https://www.youtube.com/watch?v=VaExiwhFnwQ&ab_channel=ShadowofWar"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                “Middle Earth: Shadow of War - Desolation of Mordor" (DLC)
                            </a>
                                <div className="job-duties">
                                    <h5>Content</h5>
                                    <ul className="duties-list">
                                        <li>Motionbuilder previs & blockout through to final camera polish.</li>
                                        <li>Completed all body and prop animation in my layouts.</li>
                                        <li>Used Nuke and AfterEffects for a few post effects.</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="position-section">
                    <h3>Warner Bros / Monolith Productions</h3>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title">Advanced Cinematic Animator (contract)</h4>
                            <p className="job-date">October 2013 - September 2014</p>
                        </div>
                        <div className="game-details">
                            <a 
                                className="game-name"
                                href="https://www.shadowofwar.com/shadow-of-mordor/"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                "Middle Earth: Shadow of Mordor"
                            </a>
                            <div className="job-duties">
                                <h5>Content</h5>
                                <ul className="duties-list">
                                    <li>Motionbuilder previs & blockout  through to final camera polish.</li>
                                    <li>Created key scenes showcased in demos and promotional content.</li>
                                    <li>Our team completed 86 minutes of highly polished cinematics under an aggressive 13 month schedule.</li>
                                    <li>Additional polish passes on content for impact and punch.</li>
                                    <li>Compositing and post-process work including:  Transitional effects,  sky replacements,  landscape vista enhancements, and rendering-bug removal.</li>
                                    <li>Edited multiple marketing trailers for web and television.</li>
                                </ul>
                            </div>
                            <div className="job-duties">
                                <h5>Tech Art</h5>
                                <ul className="duties-list">
                                    <li>Outlined pipeline and project structure to establish a team-wide workflow.</li>
                                    <li>Motionbuilder Camera Rig development based on usability feedback.</li>
                                    <li>Proactively developed and maintained a suite of Motionbuilder Python tools that were deployed team-wide.  Continuously gathered feedback to ensure usability.</li>
                                    <li className="tools-title">Some tools include:
                                        <ul className="tools-list">
                                            <li>Automation of a complicated scene export process.</li>
                                            <li>Custom rotation-only based FBX character animation clip export.</li>
                                            <li>Performance capture camera data distribution to the discrete controls of our Camera Rig.</li>
                                            <li>Facial data alignment with body data based on timecode.</li>
                                            <li>Audio file trimming based on mocap time ranges.</li>
                                            <li>And many more!</li>
                                        </ul>
                                    </li>
                                    <li>Created Python/Batch tools to maintain our engine-based rendering pipeline.  Automated video conversion, organization, and Shotgun uploading.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-section">
                    <h3>Ozone Interactive</h3>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title">Senior Animator (contract)</h4>
                            <p className="job-date">September 2013 - October 2013</p>
                        </div>
                        <div className="game-details">
                            <a 
                                className="game-name"
                                href="http://neveralonegame.com/"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                "Never Alone" (prototype)
                            </a>
                            <div className="job-duties no-duty-title">
                                <ul className="duties-list">
                                    <li>Created Maya animation sets for the main character to complete a proof-of-concept level for what would eventually become the game “Never Alone”. Implemented in Unity.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-section">
                    <h3>Warner Bros / Monolith Productions</h3>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title">Senior Cinematic Animator (contract)</h4>
                            <p className="job-date">January 2013 - September 2013</p>
                        </div>
                        <div className="game-details">
                            <a 
                                className="game-name"
                                href="https://www.shadowofwar.com/shadow-of-mordor/"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                "Middle Earth: Shadow of Mordor"
                            </a>
                            <div className="job-duties">
                                <h5>Content</h5>
                                <ul className="duties-list">
                                    <li>Contributed in all stages of production.  2d animatic and previs through to final camera-lock.  Block-out animation,  mocap implementation and modification,  camera animation and editing.</li>
                                    <li>Helped re-define cinematic visual style-guide.</li>
                                </ul>
                            </div>
                            <div className="job-duties">
                                <h5>Tech Art</h5>
                                <ul className="duties-list">
                                    <li>Learned MotionBuilder and developed a workflow for building a scene. Developed MotionBuilder Camera Rig that accommodates hand-keyed animation through versatile controls, drives in-game Depth of Field settings with visual feedback, and easily exports to the engine.</li>
                                    <li>Developed MotionBuilder Python scripts to assist facial animation, and exporting camera switcher edits to engine.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-section">
                    <h3>Ozone Interactive</h3>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title">Senior Animator (contract)</h4>
                            <p className="job-date">April 2012 - January 2013</p>
                        </div>
                        <div className="game-details">
                            <h4 className="no-link">"Amazon Project"</h4>
                            <div className="job-duties no-duty-title">
                                <ul className="duties-list">
                                    <li>Created Maya based, UI and interaction pre-visualization animation for multiple phone OS concepts.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="game-details">
                            <h4 className="no-link">"Roku Project"</h4>
                            <div className="job-duties no-duty-title">
                                <ul className="duties-list">
                                    <li>Created AfterEffects based, UI pre-visualization animation for new products and software.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-section">
                    <h3>Fuelcell Games</h3>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title">Studio Animation Director | Co-owner</h4>
                            <p className="job-date">April 2010 - April 2012 | Present</p>
                        </div>
                        <div className="game-details">
                            <a 
                                className="game-name"
                                href="https://www.youtube.com/watch?v=-9r6J0b-2BI&ab_channel=MichelGagne"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                "Insanely Twisted Shadow Planet"
                            </a>
                            <div className="awards">
                                <h5 className="winner">WINNER</h5>
                                <div className="award-row">
                                    <p className="award-title">"Best Debut Game"</p>
                                    <p className="award-organization">British Academy of Film and Television Arts (<span>BAFTA</span>)</p>
                                    <p className="award-year">2011</p>
                                </div>
                                <div className="award-row">
                                    <p className="award-title">"Best Animated Video Game"</p>
                                    <p className="award-organization">39th Annual Annie Awards (<span>ASIFA</span>)</p>
                                    <p className="award-year">2011</p>
                                </div>
                            </div>
                            <div className="job-duties">
                                <h5>Content</h5>
                                <ul className="duties-list">
                                    <li>Rigged and animated most characters and dynamic environment models.</li>
                                    <li>Created models.</li>
                                    <li>Level concept, layout and design.</li>
                                    <li>Assisted with cinematics.</li>
                                </ul>
                            </div>
                            <div className="job-duties">
                                <h5>Tech Art</h5>
                                <ul className="duties-list">
                                    <li>Worked with our engineering team to create the animation pipeline for our proprietary engine.</li>
                                    <li>Created numerous Python scripts to assist rigging and animation.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="game-details">
                            <a 
                                className="game-name"
                                href="https://www.youtube.com/watch?v=PbHencDiTFs&ab_channel=MichelGagne"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                "Insanely Twisted Shadow Planet: Shadow Hunters" (DLC)
                            </a>
                            <div className="job-duties no-duty-title">
                                <ul className="duties-list">
                                    <li>Rigged and animated characters and dynamic environment models.</li>
                                    <li>Created an animated lobby environment.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="game-details">
                            <h4 className="no-link">"Conquer" (prototype)</h4>
                            <div className="job-duties no-duty-title">
                                <ul className="duties-list">
                                    <li>Rigged and animated all characters.</li>
                                    <li>Built play arena from concepts.</li>
                                    <li>Logo.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="game-details">
                            <h4 className="no-link">"Abstrakt" (prototype)</h4>
                            <div className="job-duties no-duty-title">
                                <ul className="duties-list">
                                    <li>Modeled, rigged, and animated player avatar.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="game-details">
                            <h4 className="no-link">"Ship Studio" (prototype)</h4>
                            <div className="job-duties no-duty-title">
                                <ul className="duties-list">
                                    <li>Created models.</li>
                                    <li>Concept Designed UI.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-section">
                    <h3>Surreal Software / Midway Seattle / Warner Bros Interactive Seattle</h3>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title">Senior Cinematic Animator</h4>
                            <p className="job-date">August 2005 - April 2010</p>
                        </div>
                        <ul className="surreal-list">
                            <li>"This is Vegas"</li>
                            <li>"Fear 3"</li>
                            <li>"War in the North"</li>
                            <li>"Wheelman"</li>
                            <li>"John Woo Presents Stranglehold</li>
                            <li className="italic">Multiple unannounced prototype projects</li>
                        </ul>
                    </div>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title">Lead Cinematic Animator</h4>
                            <p className="job-date">January 2004 - August 2005</p>
                        </div>
                        <ul className="surreal-list">
                            <li>"The Suffering: Ties That Bind"</li>
                        </ul>
                    </div>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title">Cinematic Animator</h4>
                            <p className="job-date">April 2003 - January 2004</p>
                        </div>
                        <ul className="surreal-list">
                            <li>"The Suffering"</li>
                            <li>“Lord of the Rings: The Treason of Isengard”</li>
                        </ul>
                    </div>
                </div>

                <div className="software-section">
                    <h3>SOFTWARE</h3>
                    <div className="software-grid">
                        <p>Maya</p>
                        <p>MotionBuilder</p>
                        <p>Unreal</p>
                        <p>Premiere</p>
                        <p>Nuke</p>
                        <p>Photoshop</p>
                        <p>Python</p>
                        <p>After Effects</p>
                        <p>Proprietary Engines</p>
                        <p>Perforce</p>
                        <p>ShotGrid</p>
                    </div>
                </div>

                <div className="education-section">
                    <h3>EDUCATION</h3>
                    <p>Art Institute Seattle AAA Computer Animation</p>
                </div>
            </div>
        </div>
    );
}