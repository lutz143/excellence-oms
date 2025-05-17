import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

import classes from "../css/Donors.module.css"
import bgImage from "../assets/AdobeStock_170237839.jpeg"

const Donors = () => {
    return (
        <>
            <main className={classes.mainContainer} style={{ '--bg-image': `url(${bgImage})` }}>
                <section style={{ position: 'relative', zIndex: 2 }}>
                    <div className={classes.donorBanner}>
                        <Container className={classes.donorWrapper}>
                            <h2>Support the Future of Oral & Maxillofacial Surgery</h2>
                        </Container>
                    </div>
                    <div className={classes.headline}>
                        <Container>
                            <p>At <span className={classes.titleSpan}><span className={classes.title}>Excellence </span>  in OMS</span>, your generosity fuels a powerful mission: to educate, empower, and uplift the next generation of oral and maxillofacial surgeons—while extending compassionate care to underserved communities.</p>
                        </Container>
                    </div>
                    <section style={{ height: '500px' }}>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <Card>
                                        <Card.Title>Test 1</Card.Title>
                                        <Card.Body></Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12}>
                                    <Card>
                                        <Card.Title>Test 1</Card.Title>
                                        <Card.Body></Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12}>
                                    <Card>
                                        <Card.Title>Test 1</Card.Title>
                                        <Card.Body></Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </section>
            </main>
        </>
    );
};

export default Donors;
