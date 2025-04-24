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
                        <p>Lorem ipsum dolor sit amet.</p>
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
                <Container>
                    <h2>Our Mission</h2>
                    <p>There are many providers of dental insurance, all of which offer different levels of coverage. Midwest Oral Maxillofacial & Implant Surgery accepts all of the following insurance plans among many others.</p>
                </Container>
            </section>
        </>
    );
}

export default Home;