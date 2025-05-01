import React, { useEffect, useRef, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const beneficiaries = [
    {
        title: "Oral and Maxillofacial Surgeons & OMS Residents",
        description:
            "Will benefit directly through support for their education, professional development, and hands-on training.",
    },
    {
        title: "Dental Students",
        description:
            "Those showing interest and promise in OMS careers gain direct access to mentorship and opportunities.",
    },
    {
        title: "Underserved Patients",
        description:
            "In the Greater St. Louis area (and beyond), receive much-needed care through outreach programs.",
    },
    {
        title: "Future OMS Patients",
        description:
            "All future patients treated by beneficiaries will indirectly benefit from enhanced skills and knowledge.",
    },
    {
        title: "OMS Co-Residents",
        description:
            "Colleagues of participating surgeons benefit from the shared insights and skills acquired through EOMSF programs.",
    },
];

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
                <Card className="h-100 shadow-sm border-0">
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
                <h2 className="text-center fw-bold mb-5">Who Benefits?</h2>
                {beneficiaries.map((b, idx) => (
                    <Row key={idx} className="mb-4">
                        <AnimatedCard {...b} />
                    </Row>
                ))}


            </Container>
        </section>
    );
}
