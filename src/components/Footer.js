import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/ExcellenceOMS_Transparent.png";

import classes from "../css/Footer.module.css"

import LinkedInLogo from "../assets/icon-linkedin.png"
import YouTubeLogo from "../assets/icon-youtube.png"
import FacebookLogo from "../assets/icon-facebook.png"
import xLogo from "../assets/icon-x-fka-twitter.png"

function Footer(props) {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs lg="5">
                        <div className={classes.imgContainer}>
                            <NavLink to="/">
                                <img src={logo} alt="Logo" />
                            </NavLink>
                        </div>
                    </Col>
                    <Col xs lg="3">
                        <div className={classes.footerOrgHeader}>
                            Organization
                        </div>
                        <div className={classes.innerOrg}>
                            <ul className={classes.footerList}>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/about/board">Board Members</NavLink></li>
                                <li><NavLink to="/about/involvement">Involvement</NavLink></li>
                                <li>Donors</li>
                            </ul>
                        </div>
                        <div className={classes.innerOrg}>
                            <ul className={classes.footerList}>
                                <li>Charter</li>
                                <li>Services</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs lg="2">
                        <div className={classes.footerOrgHeader}>
                            Support
                        </div>
                        <div className={classes.innerOrg}>
                            <ul className={classes.footerList}>
                                <li>Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Application Process</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs lg="2" className={classes.connectColumn}>
                        <div className={classes.footerConnectHeader}>
                            Connect
                        </div>
                        <div>
                            <ul className={classes.iconList}>
                                <li>
                                    <div>
                                        <a href="https://www.linkedin.com/in/joshlutz/" target="_blank" rel="noreferrer" className={classes.socialIcon}>
                                            <img src={LinkedInLogo} alt="LinkedIn Logo" />
                                        </a>
                                        <span className={classes.iconSpan}>
                                            <a href="https://www.linkedin.com/in/joshlutz/" target="_blank" rel="noreferrer">LinkedIn</a>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className={classes.socialIcon}>
                                            <img src={YouTubeLogo} alt="YouTube Logo" />
                                        </a>
                                        <span className={classes.iconSpan}>
                                            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className={classes.socialIcon}>
                                            <img src={FacebookLogo} alt="Facebook Logo" />
                                        </a>
                                        <span className={classes.iconSpan}>
                                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="https://www.x.com" target="_blank" rel="noreferrer" className={classes.socialIcon}>
                                            <img src={xLogo} alt="X Logo" />
                                        </a>
                                        <span className={classes.iconSpan}>
                                            <a href="https://www.x.com" target="_blank" rel="noreferrer">X</a>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className={classes.copyrightWrapper}>
                        <p className={classes.copyrightFooter}>
                            ©2025 Excellence in OMS. All rights reserved.
                        </p>
                    </div>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;