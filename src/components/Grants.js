import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { members } from '../data/membersList';

import classes from "../css/Grants.module.css";
import computerImg from "../assets/computer.jpg"

function Grants() {
    return (
        <>
            <section className={classes.banner}>
                <div className={classes.bannerImageWrapper}>
                    <img src={computerImg} alt='Doctor Computer' className={classes.bannerImage} />
                </div>
                <Container className={classes.textBannerContainer}>
                    <Row className={classes.rownContainer}>
                        <Col>
                            <div className={classes.textBanner}>
                                <h2>Grants</h2>
                                <p>Explore grant opportunities and learn how to partner with Excellence in OMS.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className={classes.textOffer}>
                                <h2>We Offer</h2>
                                <p>Advancing surgery through research, guidelines, and educational resource funding.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
}

export default Grants;