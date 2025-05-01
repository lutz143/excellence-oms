import React, { useEffect, useRef, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import { beneficiaries } from "../data/beneficiaries";
import classes from "./Beneficiaries.module.css";

function AnimatedCard({ title, description }) {
    const ref = React.useRef(null);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Col className="d-flex justify-content-center">
            <div
                ref={ref}
                className={`w-100 animate__animated ${visible ? "animate__fadeInUp" : "invisible"}`}
                style={{ animationDuration: "0.8s", maxWidth: "800px" }}
            >
                <Card className={classes.benefitCard}>
                    <Card.Body>
                        <Card.Title className="fw-bold">{title}</Card.Title>
                        <Card.Text className="text-muted">{description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
}

export default function Beneficiaries() {
    return (
        <section className="py-5 bg-light" id="beneficiaries">
            <Container>
                <h2 className={classes.benefitHeader}>Who Benefits?</h2>
                {beneficiaries.map((b, idx) => (
                    <Row key={idx} className="mb-4">
                        <AnimatedCard {...b} />
                    </Row>
                ))}


            </Container>
        </section>
    );
}
