import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";

import "../css/Board.css";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <section className="board">
            <div className="board-leadership">
                <h2>Board Leadership</h2>
            </div>
            <div className="wrapper">
                <p>
                    Our forward-looking leadership team is made up of dedicated, focused and experienced executives.  Working with each other and with our employees worldwide, their knowledge and experience come together to make a difference for all our stakeholders – patients, healthcare providers, employees, investors and communities around the globe.
                </p>
            </div>
            <Container id="card-container">
                <Row>
                    <Col className="col-4" id="card-col">
                        <Card id="board-card">
                            <div className="board-img-container">
                                <img src="https://midwestomfs.com/wp-content/uploads/UrbanekStand.png" alt="Board Member Picture"></img>
                            </div>
                            <div>
                                <h3>David E. Urbanek, DMD, MS</h3>
                                <h4>Text text text text text. Text Text text.</h4>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-4" id="card-col">
                        <Card id="board-card">
                            <div className="board-img-container">
                                <img src="https://midwestomfs.com/wp-content/uploads/UrbanekStand.png" alt="Board Member Picture"></img>
                            </div>
                            <div>
                                <h3>David E. Urbanek, DMD, MS</h3>
                                <h4>Text text text text text. Text Text text.</h4>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-4" id="card-col">
                        <Card id="board-card">
                            <div className="board-img-container">
                                <img src="https://midwestomfs.com/wp-content/uploads/UrbanekStand.png" alt="Board Member Picture"></img>
                            </div>
                            <div>
                                <h3>David E. Urbanek, DMD, MS</h3>
                                <h4>Text text text text text. Text Text text.</h4>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Navbar;
