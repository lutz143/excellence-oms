import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { grants } from "../data/grants";

import classes from "../css/Home.module.css";

function Home() {
    const totalGrants = grants.reduce((acc, grant) => acc + grant.count, 0);
    const totalAmount = grants.reduce((acc, grant) => acc + grant.amount, 0);

    return (
        <>
            <section className={classes.banner}>
                <div className={classes.bannerImageWrapper}>
                    <img src="/images/AdobeStock_73382244.jpeg" alt="Banner" className={classes.bannerImage} />
                    <div className={classes.overlay}></div>
                    <div className={classes.textContent}>
                        <p>Building Excellence in Oral Surgery — One Grant at a Time</p>
                        <p>Consectetur adipiscing elit.</p>
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

            <section className={classes.sectionAlt}>
                <div className={classes.textBanner}>
                    <h2>Our Mission</h2>
                    <p>Our mission is to support aspiring oral and maxillofacial surgeons during residency through financial grants, fostering excellence, equity, and innovation in the field.</p>
                    <p>You're a rabid anti-dentite! Oh, it starts with a few jokes and some slurs: "Hey, denty!" Next thing you know you'll be saying, "They should have their own schools"!</p>
                </div>
            </section>
        </>
    );
}

export default Home;