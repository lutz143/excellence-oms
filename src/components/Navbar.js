import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

import "../css/Nav.css";
import logo from "../assets/ExcellenceOMS_1.png";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <nav id="nav-container">
            {/* display hamburger menu when media query triggered */}
            <div className="navbar">
                <NavLink to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavLink>
            </div>
            <div className={sidebar ? "mobile active" : "navbar"}>
                <ul className="navbar" onClick={showSidebar}>
                    <li><NavLink to="/">Home</NavLink></li>

                    {/* About Dropdown (Hover-Based) */}
                    <li
                        className="dropdown"
                        onMouseEnter={() => setAboutDropdown(true)}
                        onMouseLeave={() => setTimeout(() => setAboutDropdown(false), 300)}
                    >
                        <NavLink to="/about">About</NavLink>
                        <ul
                            className={`dropdown-menu ${aboutDropdown ? "show" : ""}`}
                            onMouseEnter={() => setAboutDropdown(true)}
                            onMouseLeave={() => setAboutDropdown(false)}
                        >
                            <li><NavLink to="/about/mission">Mission Statement</NavLink></li>
                            <li><NavLink to="/about/board">Board Members</NavLink></li>
                            <li><NavLink to="/about/involvement">Involvement</NavLink></li>
                        </ul>
                    </li>

                    <img src={logo} alt="Logo" className="nav-logo" />

                    <li><NavLink to="/grants">Grants</NavLink></li>
                    <li><NavLink to="/login">Profile</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
