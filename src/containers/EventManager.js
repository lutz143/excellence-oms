import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form, ListGroup } from "react-bootstrap";

import classes from "../css/EventManager.module.css";

const LOCAL_STORAGE_KEY = "companyEvents";

export default function EventManager() {
    const [events, setEvents] = useState([]);

    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        speaker: "",
        location: "",
        date: "",
        time: "",
    });

    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedEvents) setEvents(storedEvents);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events));
    }, [events]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const addEvent = () => {
        const { title, date, time } = formData;
        if (!title || !date || !time) return;

        const newEvent = {
            id: Date.now(),
            ...formData,
        };

        const updatedEvents = [...events, newEvent].sort(
            (a, b) =>
                new Date(`${a.date}T${a.time}:00`) - new Date(`${b.date}T${b.time}:00`)
        );


        setEvents(updatedEvents);
        setFormData({
            title: "",
            subtitle: "",
            speaker: "",
            location: "",
            date: "",
            time: "",
        });
    };

    const removeEvent = (id) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    return (
        <Container className={classes.eventHeader}>
            <h2 className="mb-4">Upcoming Company Events</h2>

            <Card className="mb-4">
                <Card.Body>
                    <Form>
                        <Row className="g-3">
                            <Col md={6}>
                                <Form.Group controlId="formTitle">
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        placeholder="Event Title"
                                        value={formData.title}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formSubtitle">
                                    <Form.Control
                                        type="text"
                                        name="subtitle"
                                        placeholder="Event Subtitle"
                                        value={formData.subtitle}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formSpeaker">
                                    <Form.Control
                                        type="text"
                                        name="speaker"
                                        placeholder="Guest Speaker"
                                        value={formData.speaker}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formLocation">
                                    <Form.Control
                                        type="text"
                                        name="location"
                                        placeholder="Location"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group controlId="formDate">
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group controlId="formTime">
                                    <Form.Control
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Row>
                                <div className={classes.buttonContainer}>
                                    <Button variant="primary" onClick={addEvent}>
                                        Add Event
                                    </Button>
                                </div>
                            </Row>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>

            {events.length === 0 ? (
                <p className="text-muted">No upcoming events.</p>
            ) : (
                <Container className={classes.eventContainer}>
                    <ListGroup>
                        {events.map((event) => (
                            <ListGroup.Item
                                key={event.id}
                                className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center"
                            >
                                <div>
                                    <h5>{event.title}</h5>
                                    {event.subtitle && <p className="mb-1"><em>{event.subtitle}</em></p>}
                                    {event.speaker && <p className="mb-1">🎤 <strong>Speaker:</strong> {event.speaker}</p>}
                                    {event.location && <p className="mb-1">📍 <strong>Location:</strong> {event.location}</p>}
                                    <p className="mb-1">
                                        📅 {new Date(`${event.date}T${event.time}:00`).toLocaleDateString()} at {event.time}
                                    </p>
                                </div>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => removeEvent(event.id)}
                                    className="mt-2 mt-md-0"
                                >
                                    Remove
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Container>
            )}
        </Container>
    );
}
