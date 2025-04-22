import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";

import classes from "../css/Home.module.css";

function Home() {
    const [sidebar, setSidebar] = useState(false);

    return (
        <section>
            <Row className={classes.banner}>
                <div className={classes.bannerOverlay}>
                    <div className={classes.bannerOverlayImg}>
                    </div>
                </div>
            </Row>
        </section>
    );
}

export default Home;