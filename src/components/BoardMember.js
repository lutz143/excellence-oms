import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";

import "../css/BoardMember.css";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <section className="board">
            <div className="board-leadership">
                <h2>Board Leadership</h2>
            </div>
            <Container>
                <Row>
                    <Col className="col-3">
                        <div className="board-img-container">
                            <img src="https://midwestomfs.com/wp-content/uploads/UrbanekStand.png" alt="Board Member Picture"></img>
                        </div>
                    </Col>
                    <Col className="col-9">
                        <div>
                            <p>
                                Dr. Urbanek grew up in Cleveland, Ohio, and completed his Bachelor’s Degree at Case Western Reserve University (CWRU) in Cleveland. He earned a Master’s Degree with honors in Anatomy at CWRU, then went on to graduate at the top of his class at the CWRU School of Dental Medicine. He completed his four-year residency in Oral and Maxillofacial Surgery at Carle Foundation Hospital in Champaign/Urbana, Illinois. During his time at CWRU, he has served as a teaching assistant for medical, dental, and graduate students in the anatomical sciences. A life-long learner and educator, Dr. Urbanek serves as adjunct faculty at the A.T. Still University Missouri School of Dentistry and Oral Health, and avidly lectures to the dental and OMS community throughout the country. He has authored several chapters in various Oral and Maxillofacial Surgery textbooks.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div style={{ dispaly: "block" }}>
                    <Row>
                        <Col>
                            <div>
                                <p>
                                    Dr. Urbanek grew up in Cleveland, Ohio, and completed his Bachelor’s Degree at Case Western Reserve University (CWRU) in Cleveland. He earned a Master’s Degree with honors in Anatomy at CWRU, then went on to graduate at the top of his class at the CWRU School of Dental Medicine. He completed his four-year residency in Oral and Maxillofacial Surgery at Carle Foundation Hospital in Champaign/Urbana, Illinois. During his time at CWRU, he has served as a teaching assistant for medical, dental, and graduate students in the anatomical sciences. A life-long learner and educator, Dr. Urbanek serves as adjunct faculty at the A.T. Still University Missouri School of Dentistry and Oral Health, and avidly lectures to the dental and OMS community throughout the country. He has authored several chapters in various Oral and Maxillofacial Surgery textbooks.
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="board-img-container">
                                <img src="https://midwestomfs.com/wp-content/uploads/UrbanekStand.png" alt="Board Member Picture"></img>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <div className="board-img-container">
                            <img src="https://midwestomfs.com/wp-content/uploads/UrbanekStand.png" alt="Board Member Picture"></img>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p>
                                Dr. Urbanek grew up in Cleveland, Ohio, and completed his Bachelor’s Degree at Case Western Reserve University (CWRU) in Cleveland. He earned a Master’s Degree with honors in Anatomy at CWRU, then went on to graduate at the top of his class at the CWRU School of Dental Medicine. He completed his four-year residency in Oral and Maxillofacial Surgery at Carle Foundation Hospital in Champaign/Urbana, Illinois. During his time at CWRU, he has served as a teaching assistant for medical, dental, and graduate students in the anatomical sciences. A life-long learner and educator, Dr. Urbanek serves as adjunct faculty at the A.T. Still University Missouri School of Dentistry and Oral Health, and avidly lectures to the dental and OMS community throughout the country. He has authored several chapters in various Oral and Maxillofacial Surgery textbooks.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Navbar;
