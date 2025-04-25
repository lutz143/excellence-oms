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
                            <p>Founded by a practicing oral and maxillofacial surgeon, our nonprofit organization was created to support the next generation of surgeons during one of the most demanding phases of their careers: residency. By awarding grants to those who show promise, passion, and financial need, we hope to advance excellence in the field while removing barriers to success. We believe in a future where every resident has the tools and resources to reach their full potential.</p>
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
                    </div>
                </Container>
            </section>
        </>
    );
}

export default About;