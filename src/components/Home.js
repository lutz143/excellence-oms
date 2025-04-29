import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { grants } from "../data/grants";

import classes from "../css/Home.module.css";

import BannerPic from '../assets/AdobeStock_73382244.jpeg'
import DoctorsConsultingPic from '../assets/DoctorsConsulting.jpg'


function Home() {
    const totalGrants = grants.reduce((acc, grant) => acc + grant.count, 0);
    const totalAmount = grants.reduce((acc, grant) => acc + grant.amount, 0);

    return (
        <>
            <section className={classes.banner}>
                <div className={classes.bannerImageWrapper}>
                    <img src={BannerPic} className={classes.bannerImage} alt="Banner" />
                    <div className={classes.overlay}></div>
                    <div className={classes.textContent}>
                        <p>Building Excellence in Oral Surgery — One Grant at a Time</p>
                        <p>Dentistae mundum sibi vindicant.</p>
                    </div>
                </div>
            </section>

            <section className={classes.section}>
                <Container className={classes.counterWrapper}>
                    <Row>
                        <Col className="text-center">
                            <h2>Total Grants</h2>
                            <p>
                                <CountUp end={totalGrants} duration={2} />
                            </p>
                        </Col>
                        <Col className="text-center">
                            <h2>Grant Amount</h2>
                            <p>
                                $<CountUp end={totalAmount} duration={2} separator="," />
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={classes.homeMission}>
                <div className={classes.textBanner}>
                    <h2>Our Mission</h2>
                    <p>Our mission is to advance the field of Oral & Maxillofacial Surgery (OMS) through education and clinical training for Oral & Maxillofacial Surgeons and OMS Residents.</p>
                    <p>You're a rabid anti-dentite! Oh, it starts with a few jokes and some slurs: "Hey, denty!" Next thing you know you'll be saying, "They should have their own schools"!</p>
                </div>
            </section>

            <section className={classes.aboutUsSection}>
                <Container className={classes.aboutUsWrapper}>
                    <Col>
                        <div className={classes.aboutUsImageWrapper}>
                            <img src={DoctorsConsultingPic} alt="Doctors Consulting" className={classes.aboutUsImage} />
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.aboutUsTextBanner}>
                            <h2>Our Story</h2>
                            <p>Founded by a practicing oral and maxillofacial surgeon, our nonprofit organization was created to support the next generation of surgeons during one of the most demanding phases of their careers: residency. By awarding grants to those who show promise, passion, and financial need, we hope to advance excellence in the field while removing barriers to success. We believe in a future where every resident has the tools and resources to reach their full potential</p>
                        </div>
                    </Col>
                </Container>
            </section>
        </>
    );
}

export default Home;