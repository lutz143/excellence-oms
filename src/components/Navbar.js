import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";
import logo from "../assets/ExcellenceOMS_1.png";

import classes from "../css/Nav.module.css";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <header>
            <nav id={classes.navContainer}>
                <div className={classes.topnavbarContainer}>
                    <div className={classes.topnavbar}>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/events">Events</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </div>
            </nav>

            <nav className={classes.menuBars}>
                {/* display hamburger menu when media query triggered */}
                <div className={classes.navbar}>
                    <NavLink to="#" className={classes.menuBars}>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavLink>
                </div>
            </nav>
            <nav id={classes.navContainer}>
                <div className={classes.navBackground}>
                    <div
                        className={
                            sidebar
                                ? `${classes.mobile} ${classes.active}`
                                : classes.navbar
                        }>
                        <ul className={classes.navbar} onClick={showSidebar}>
                            <li><NavLink to="/">Home</NavLink></li>

                            {/* About Dropdown (Hover-Based) */}
                            <li
                                className={classes.dropdown}
                                onMouseEnter={() => setAboutDropdown(true)}
                                onMouseLeave={() => setTimeout(() => setAboutDropdown(false), 300)}
                            >
                                <NavLink to="/about">About</NavLink>
                                <ul
                                    className={`${classes.dropdownMenu} ${aboutDropdown ? classes.show : ""}`}
                                    onMouseEnter={() => setAboutDropdown(true)}
                                    onMouseLeave={() => setAboutDropdown(false)}
                                >
                                    <li><NavLink to="/about/mission">Mission Statement</NavLink></li>
                                    <li><NavLink to="/about/board">Board Members</NavLink></li>
                                    <li><NavLink to="/about/involvement">Involvement</NavLink></li>
                                </ul>
                            </li>
                            <div className={classes.imgContainer}>
                                <NavLink to="/">
                                    <img src={logo} alt="Logo" />
                                </NavLink>
                            </div>


                            <li><NavLink to="/grants">Grants</NavLink></li>
                            <li><NavLink to="/login">Profile</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    );
}

export default Navbar;
