import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";

export default function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <IconContext.Provider value={{ color: "#d3d3d3" }}>
            <div className="header-navigation">
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <RxCross1 /> : <RxHamburgerMenu />}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}> 
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            onClick={closeMobileMenu}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/resume"
                            className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            onClick={closeMobileMenu}
                        >
                            RESUME
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            onClick={closeMobileMenu}
                        >
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </div>
        </IconContext.Provider>
    );
}