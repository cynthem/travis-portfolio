import React from "react";
import { Parallax } from "react-parallax";
import resumeBackground from "../assets/images/art/Resume_Background_1280.png";

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
                            <h4 className="game-name">"Hogwarts Legacy"</h4>
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
                            <h4 className="game-name">"Middle Earth: Shadow of War"</h4>
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
                            <h4 className="game-name">“Middle Earth: Shadow of War - The Blade of Galadriel" (DLC)</h4>
                                <div className="job-duties">
                                    <h5>Content</h5>
                                    <ul className="duties-list">
                                        <li>Motionbuilder previs & blockout through to final camera polish.</li>
                                        <li>Additional body, creature, and prop animation in my layouts.</li>
                                    </ul>
                                </div>
                        </div>
                        <div className="game-details">
                            <h4 className="game-name">“Middle Earth: Shadow of War - Desolation of Mordor" (DLC)</h4>
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
                            <h4 className="game-name">"Middle Earth: Shadow of Mordor"</h4>
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
                                    <li>Some tools include:
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
                            <h4 className="job-title"></h4>
                            <p className="job-date"></p>
                        </div>
                        <div className="game-details">
                            <h4 className="game-name"></h4>
                            <div className="job-duties">
                                <h5>Content</h5>
                                <ul className="duties-list">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-section">
                    <h3>Warner Bros / Monolith Productions</h3>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title"></h4>
                            <p className="job-date"></p>
                        </div>
                        <div className="game-details">
                            <h4 className="game-name"></h4>
                            <div className="job-duties">
                                <h5>Content</h5>
                                <ul className="duties-list">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-section">
                    <h3>Ozone Interactive</h3>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title"></h4>
                            <p className="job-date"></p>
                        </div>
                        <div className="game-details">
                            <h4 className="game-name"></h4>
                            <div className="job-duties">
                                <h5>Content</h5>
                                <ul className="duties-list">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-section">
                    <h3>Fuelcell Games</h3>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title"></h4>
                            <p className="job-date"></p>
                        </div>
                        <div className="game-details">
                            <h4 className="game-name"></h4>
                            <div className="job-duties">
                                <h5>Content</h5>
                                <ul className="duties-list">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-section">
                    <h3>Surreal Software / Midway Seattle / Warner Bros Interactive Seattle</h3>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title"></h4>
                            <p className="job-date"></p>
                        </div>
                        <div className="game-details">
                            <h4 className="game-name"></h4>
                            <div className="job-duties">
                                <h5>Content</h5>
                                <ul className="duties-list">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title"></h4>
                            <p className="job-date"></p>
                        </div>
                        <div className="game-details">
                            <h4 className="game-name"></h4>
                            <div className="job-duties">
                                <h5>Content</h5>
                                <ul className="duties-list">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="position-details">
                        <div className="title-date">
                            <h4 className="job-title"></h4>
                            <p className="job-date"></p>
                        </div>
                        <div className="game-details">
                            <h4 className="game-name"></h4>
                            <div className="job-duties">
                                <h5>Content</h5>
                                <ul className="duties-list">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
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