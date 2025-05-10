import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { members } from '../data/membersList';

import classes from "../css/Grants.module.css";
import grantImg from "../assets/AdobeStock_313812944.jpeg"

function Grants() {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <section className={classes.banner}>
                <div className={classes.bannerImageWrapper}>
                    <img src={grantImg} alt='Doctor Shaking Hands' className={classes.bannerImage} />
                </div>
                <Container className={classes.textBannerContainer}>
                    <Row className={classes.rowContainer}>
                        <Col>
                            <div className={classes.textBanner}>
                                <h2>Grants</h2>
                                <p>Explore grant opportunities and learn how to partner with Excellence in OMS.</p>
                                <Button className="primary" id={classes.applyButton}>Apply Now</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={classes.iconBanner}>
                <Container className={classes.iconWrapper}>
                    <Row className={classes.iconRow}>
                        <Col xs={12} md={3} className={classes.iconCol}>
                            <Row>
                                <div className={classes.iconContainer}>
                                    <span className={classes.materialSymbolsOutlined}>
                                        app_registration
                                    </span>
                                </div>
                            </Row>
                            <Row>
                                <div className={classes.iconText}>
                                    <span>Get Started</span>
                                </div>
                            </Row>
                        </Col>

                        <Col xs={12} md={3} className={classes.iconCol}>
                            <Row>
                                <div className={classes.iconContainer}>
                                    <span className={classes.materialSymbolsOutlined}>
                                        contract
                                    </span>
                                </div>
                            </Row>
                            <Row>
                                <div className={classes.iconText}>
                                    <span>Grant Policies</span>
                                </div>
                            </Row>
                        </Col>

                        <Col xs={12} md={3} className={classes.iconCol}>
                            <Row>
                                <div className={classes.iconContainer}>
                                    <span className={classes.materialSymbolsOutlined}>
                                        redeem
                                    </span>
                                </div>
                            </Row>
                            <Row>
                                <div className={classes.iconText}>
                                    <span>Donors</span>
                                </div>
                            </Row>
                        </Col>

                        <Col xs={12} md={3} className={classes.iconCol}>
                            <Row>
                                <div className={classes.iconContainer}>
                                    <span className={classes.materialSymbolsOutlined}>
                                        support_agent
                                    </span>
                                </div>
                            </Row>
                            <Row>
                                <div className={classes.iconText}>
                                    <span>Contact Us</span>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    );
}

export default Grants;