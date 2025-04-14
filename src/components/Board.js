import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";
import { members } from '../data/membersList';

import classes from "../css/Board.module.css";

function Board() {
    const [sidebar, setSidebar] = useState(false);

    return (
        <section className={classes.board}>
            <div className={classes.boardLeadership}>
                <h2>Board Leadership</h2>
            </div>
            <div className={classes.wrapper}>
                <p className={classes.lerde}>
                    Our forward-looking leadership team is made up of dedicated, focused and experienced executives.  Working with each other and with our employees worldwide, their knowledge and experience come together to make a difference for all our stakeholders – patients, healthcare providers, employees, investors and communities around the globe.
                </p>
            </div>
            <Container id={classes.cardContainer}>
                <Row>
                    {members.map((member) => (
                        <Col className="col-md-4 col-sm-6" id={classes.cardCol}>
                            <NavLink to={`/about/board-member/${member.id}`}>
                                <Card id={classes.boardCard}>
                                    <div className={classes.boardImgContainer}>
                                        <img src={`${member.image}`} alt="Board Member"></img>
                                    </div>
                                    <div>
                                        <h3>{member.name}</h3>
                                        <h4>{member.title}</h4>
                                    </div>
                                </Card>
                            </NavLink>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Board;
