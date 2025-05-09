import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";
import { grants } from "../data/grants";

import classes from "../css/MissionStatement.module.css";


function MissionStatement() {

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0" />
            {/* 
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=school" /> */}

            <section>
                <Container>
                    <div>
                        <Row>
                            <div className={classes.homeMission}>
                                <div className={classes.textBanner}>
                                    <h2>Mission Statement</h2>
                                    <p>Our mission is to advance the field of Oral & Maxillofacial Surgery (OMS) through education and clinical training for Oral & Maxillofacial Surgeons and OMS Residents.</p>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
                <div className={classes.principlesContainer}>
                    <Row>
                        <div className={classes.principlesHeader}>
                            <h2>Guided by three key principles:</h2>
                        </div>
                    </Row>
                    <Container>
                        <Row>
                            <Col className={classes.customCol}>
                                <Card className={`${classes.missionCard} ${classes.cardEducation}`}>
                                    <Card.Header id={classes.missionCardHeader}>Excellence in Education</Card.Header>
                                    <Card.Body>
                                        <Card.Text className={classes.cardText}>We invest in top-tier training, mentorship, and opportunities for those entering the field of Oral and Maxillofacial Surgery</Card.Text>
                                        <div className={classes.cardIconContainer}>
                                            <span className={classes.materialSymbolsOutlined}>
                                                school
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className={classes.customCol}>
                                <Card className={`${classes.missionCard} ${classes.cardService}`}>
                                    <Card.Header id={classes.missionCardHeader}>Excellence in Service</Card.Header>
                                    <Card.Body>
                                        <Card.Text className={classes.cardText}>We believe in using our skills to serve vulnerable and underserved populations with dignity and care</Card.Text>
                                        <div className={classes.cardIconContainer}>
                                            <span className={classes.materialSymbolsOutlined}>
                                                diversity_2
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className={classes.customCol}>
                                <Card className={`${classes.missionCard} ${classes.cardResearch}`}>
                                    <Card.Header id={classes.missionCardHeader}>Excellence in Research</Card.Header>
                                    <Card.Body>
                                        <Card.Text className={classes.cardText}>We create and disseminate research, guidelines, and educational materials to advance the field for current and future practitioners</Card.Text>
                                        <div className={classes.cardIconContainer}>
                                            <span className={classes.materialSymbolsOutlined}>
                                                science
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default MissionStatement;