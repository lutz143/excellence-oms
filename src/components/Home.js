import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";

import classes from "../css/Home.module.css";

function Home() {
    return (
        <>
            <section className={classes.banner}>
                <div className={classes.bannerImageWrapper}>
                    <img src="/images/AdobeStock_73382244.jpeg" alt="Banner" className={classes.bannerImage} />
                    <div className={classes.overlay}></div>
                    <div className={classes.textContent}>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Consectetur adipiscing elit.</p>
                        <p>Sed do eiusmod tempor.</p>
                    </div>
                </div>
            </section>

            <section className={classes.section}>
                <Container>
                    <h2>About Us</h2>
                    <p>This is a section below the banner.</p>
                </Container>
            </section>

            <section className={classes.sectionAlt}>
                <Container>
                    <h2>Our Services</h2>
                    <p>Here's another section with content.</p>
                </Container>
            </section>
        </>
    );
}

export default Home;