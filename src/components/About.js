import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";
import { grants } from "../data/grants";

import classes from "../css/About.module.css";


function About() {

    return (
        <>
            <section className={classes.aboutUsSection}>
                <Container className={classes.aboutUsWrapper}>
                    <Row>
                        <Col md={6}>
                            <div className={classes.aboutUsImageWrapper}>
                                <img src="/images/AdobeStock_229352026.jpeg" alt="Oral Surgery" className={classes.aboutUsImage} />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={classes.aboutUsTextBanner}>
                                <h2>Our Mission</h2>
                                <p>Our mission is to advance the field of Oral & Maxillofacial Surgery (OMS) through education and clinical training for Oral & Maxillofacial Surgeons and OMS Residents.</p>
                            </div>
                            <div className={classes.aboutUsTextBanner}>
                                <h2>Our Vision</h2>
                                <p>Building Excellence in Oral Surgery—One Grant at a Time</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <div className={classes.originsWrapper}>
                    <Row>
                        <div>
                            <h2>Origins</h2>
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <p>Founded by a practicing oral and maxillofacial surgeon, our nonprofit organization was created to support the next generation of surgeons during one of the most demanding phases of their careers: residency. By awarding grants to those who show promise, passion, and financial need, we hope to advance excellence in the field while removing barriers to success.</p>
                            <p>We believe in a future where every resident has the tools and resources to reach their full potential.</p>
                        </div>
                    </Row>
                </div>
            </section>
            <section>
                <Container>
                    <div className={classes.partnershipWrapper}>
                        <Row>
                            <div>
                                <h2>Strategic Partners</h2>
                            </div>
                        </Row>
                        <Row>
                            <Col className="col-md-4 col-sm-6">
                                <a href="https://midwestomfs.com/" target="_blank" rel="noreferrer" alt="Link to Midwest OMS">
                                    <div className={classes.cardImgContainer}>
                                        <Card.Img className={classes.cardImg} src="/images/midwest-oms.png" />
                                    </div>
                                </a>
                                <a href="https://midwestomfs.com/" target="_blank" rel="noreferrer" alt="Link to Midwest OMS">
                                    <Card id={classes.boardCard}>
                                        <Card.Header id={classes.cardHeader}>Midwest OMS</Card.Header>
                                        <Card.Body>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col className="col-md-4 col-sm-6">
                                <a href="https://dentallifeline.org/" target="_blank" rel="noreferrer" alt="Link to Dental Lifeline">
                                    <div className={classes.cardImgContainer}>
                                        <Card.Img className={classes.cardImg} id={classes.dentalLifeImg} src="/images/dental-life-network.png" />
                                    </div>
                                </a>
                                <a href="https://dentallifeline.org/" target="_blank" rel="noreferrer" alt="Link to Dental Lifeline">
                                    <Card id={classes.boardCard}>
                                        <Card.Header id={classes.cardHeader}>Dental Lifeline Network</Card.Header>
                                        <Card.Body>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col className="col-md-4 col-sm-6">
                                <a href="https://www.osteoscience.org/" target="_blank" rel="noreferrer" alt="Link to Osteo Science">
                                    <div className={classes.cardImgContainer}>
                                        <Card.Img className={classes.cardImg} id={classes.osteoImg} src="/images/osteo-science-foundation-logo.jpg" />
                                    </div>
                                </a>
                                <a href="https://www.osteoscience.org/" target="_blank" rel="noreferrer" alt="Link to Osteo Science">
                                    <Card id={classes.boardCard}>
                                        <Card.Header id={classes.cardHeader}>Osteo Science Foundation</Card.Header>
                                        <Card.Body>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className={classes.locationSection}>
                <div className={classes.locationHeader}>
                    <h2>Conference Locations</h2>
                    <p>We frequently attend conferences across the United States</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <style>
                        {`
                            .pulse {
                            animation: pulse 2s infinite;
                            transform-origin: center;
                            }

                            @keyframes pulse {
                            0% {
                                r: 6;
                                opacity: 1;
                            }
                            50% {
                                r: 12;
                                opacity: 0.3;
                            }
                            100% {
                                r: 6;
                                opacity: 1;
                            }
                            }
                        `}
                    </style>
                    <svg viewBox="0 0 1000 600" width="90%" style={{ maxWidth: "800px" }} xmlns="http://www.w3.org/2000/svg">
                        {/* Background Map Image */}
                        <image href="/images/us.svg" x="0" y="0" width="1000" height="600" style={{ opacity: 0.15 }} />

                        {/* Chicago Marker */}
                        <g>
                            <circle className="pulse" cx="707" cy="210" fill="rgb(0, 150, 255)" r="6" />
                            <circle cx="707" cy="210" r="6" fill="rgb(0, 150, 255)" stroke="#fff" strokeWidth="2" />
                            <text x="707" y="190" textAnchor="middle" fontSize="20" fill="#333">Chicago: AAOMS Dental Implant Conference</text>
                        </g>

                        {/* St. Louis Marker */}
                        <g>
                            <circle className="pulse" cx="672" cy="278" fill=" rgb(0, 150, 255)" r="6" />
                            <circle cx="672" cy="278" r="6" fill="rgb(0, 150, 255)" stroke="#fff" strokeWidth="2" />
                            <text x="670" y="260" textAnchor="middle" fontSize="20" fill="#333">St. Louis</text>
                        </g>
                    </svg>
                </div>
            </section>



        </>
    );
}

export default About;