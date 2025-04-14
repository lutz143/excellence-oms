import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";
import { members } from '../data/membersList';

import classes from "../css/BoardMember.module.css";

function BoardMember() {
    const { id } = useParams();
    const member = members.find((m) => m.id === id);
    const [sidebar, setSidebar] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    if (!member) {
        return <div>Member not found</div>;
    }

    return (
        <section className={classes.boardMember}>
            <div className={classes.boardMemberHeader}>
                <h2>{member.name}</h2>
            </div>
            <Container className={classes.boardMemberConatiner}>
                <Row className={classes.boardMemberRow}>
                    <Col className="col-3">
                        <div className={classes.boardMemberImgContainer}>
                            <img src={`${member.image}`} alt="Board Member"></img>
                        </div>
                    </Col>
                    <Col className="col-9">
                        <div className={classes.boardBio}>
                            <p>{member.bio}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
}

export default BoardMember;
