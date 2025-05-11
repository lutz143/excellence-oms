import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { grantTypes } from '../data/grantTypes';

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
            <section className={classes.grantTypeBanner}>
                <Container className={classes.grantTypeWrapper}>
                    <h2>Grant Types</h2>
                    <Row className={classes.grantGrid}>
                        <Col className={classes.iconCol}>
                            <Row>
                                <div className={classes.iconText}>
                                    <h4>Resident Education</h4>
                                </div>
                            </Row>
                        </Col>
                        <Col className={classes.iconCol}>
                            <Row>
                                <div className={classes.iconText}>
                                    <h4>Travel Scholarship</h4>
                                </div>
                            </Row>
                        </Col>
                        <Col className={classes.iconCol}>
                            <Row>
                                <div className={classes.iconText}>
                                    <h4>Mentorship & Leadership</h4>
                                </div>
                            </Row>
                        </Col>
                        <Col className={classes.iconCol}>
                            <Row>
                                <div className={classes.iconText}>
                                    <h4>Community Care</h4>
                                </div>
                            </Row>
                        </Col>
                        <Col className={classes.iconCol}>
                            <Row>
                                <div className={classes.iconText}>
                                    <h4>Research & Publication</h4>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={classes.cardSection}>
                <Container>
                    {grantTypes.map((item, idx) => (
                        <Row className="mb-4" key={idx}>
                            <Card className={classes.grantCard}>
                                <Card.Body className="d-flex p-0">
                                    <div className={classes.grantCardLeft}>
                                        <span className={classes.materialSymbolsOutlined}>{item.icon}</span>
                                    </div>
                                    <div className="p-4 flex-grow-1">
                                        <Card.Title className="mb-3 fs-4">{item.title}</Card.Title>

                                        <Card.Text className="mb-3 text-muted">
                                            {item.description}
                                        </Card.Text>
                                        <Card.Header className="bg-transparent px-0 fw-bold">Ideal Candidate</Card.Header>
                                        <Card.Text className="mb-3 text-muted">
                                            {item.idealCandidate}
                                        </Card.Text>

                                        <Card.Header className="bg-transparent px-0 fw-bold">How to Apply</Card.Header>
                                        <Card.Text className="text-muted">
                                            {item.howToApply}
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>


                        </Row>
                    ))}
                </Container>
            </section>


        </>
    );
}

export default Grants;