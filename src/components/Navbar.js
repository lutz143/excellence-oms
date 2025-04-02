import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

import "./Nav.css";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <nav id="nav-container">
            <div className="navbar">
                <NavLink to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavLink>
                <NavLink to="/" className="nav-title">nomin<span style={{ fontSize: "3.5rem" }}>al</span>.com</NavLink>
            </div>

            <div className={sidebar ? "mobile active" : "navbar"}>
                <ul className="navbar" onClick={showSidebar}>
                    <li><NavLink to="/">Home</NavLink></li>

                    {/* About Dropdown (Hover to Expand) */}
                    <li className="dropdown">
                        <NavLink to="/about">About</NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/about/mission">Mission Statement</NavLink></li>
                            <li><NavLink to="/about/board">Board Members</NavLink></li>
                            <li><NavLink to="/about/involvement">Involvement</NavLink></li>
                        </ul>
                    </li>

                    <li><NavLink to="/grants">Grants</NavLink></li>
                    <li><NavLink to="/login">Profile</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
