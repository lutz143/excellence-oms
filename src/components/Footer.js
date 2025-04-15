import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/ExcellenceOMS_Transparent.png";

import classes from "../css/Footer.module.css"

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
                                <li>About</li>
                                <li>Board Members</li>
                                <li>Involvement</li>
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
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;