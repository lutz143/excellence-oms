import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";
import { grants } from "../data/grants";

import classes from "../css/About.module.css";

import OralSurgeryPic from "../assets/AdobeStock_229352026.jpeg";
import MidwestLogo from "../assets/midwest-oms.png"
import DentalLifelineLogo from "../assets/dental-life-network.png"
import OsteoScienceLogo from "../assets/osteo-science-foundation-logo.jpg"

import ActivityLocation from '../containers/ActivityLocations';

function About() {

    return (
        <>
            <section className={classes.aboutUsSection}>
                <Container className={classes.aboutUsWrapper}>
                    <Row>
                        <Col md={6}>
                            <div className={classes.aboutUsImageWrapper}>
                                <img src={OralSurgeryPic} alt="Oral Surgery" className={classes.aboutUsImage} />
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
                                        <Card.Img className={classes.cardImg} src={MidwestLogo} />
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
                                        <Card.Img className={classes.cardImg} id={classes.dentalLifeImg} src={DentalLifelineLogo} />
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
                                        <Card.Img className={classes.cardImg} id={classes.osteoImg} src={OsteoScienceLogo} />
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
            <section>
                <ActivityLocation />
            </section>
        </>
    );
}

export default About;