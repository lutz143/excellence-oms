import React, { useState } from 'react';
import { Form, InputGroup, Button, Card, Row, Col } from 'react-bootstrap';

import classes from "../css/DonationForm.module.css";

const DonationForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        amount: '',
        message: '',
        category: '',
        cardNumber: '',
    });

    const formatPhoneNumber = (value) => {
        const cleaned = ('' + value).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
        if (match) {
            const [, area, middle, last] = match;
            if (middle) {
                return `(${area}) ${middle}${last ? '-' + last : ''}`;
            }
            if (area) {
                return `(${area}`;
            }
        }
        return value;
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        let formattedValue = value;

        if (name === 'phone') {
            formattedValue = formatPhoneNumber(value);
        }

        setForm({ ...form, [name]: formattedValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        alert("Thank you for your interest in supporting Excellence in OMS!");
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            amount: '',
            message: '',
            category: '',
            cardNumber: '',
        });
    };

    return (
        <section className={classes.formContainer}>
            <Card className="mt-5 shadow-sm" style={{ padding: '24px' }}>
                <Card.Body>
                    <h4 className="mb-4 text-center">Become a Donor</h4>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="donorFirstName" className="mb-3">
                                    <Form.Label className={classes.formLabel}>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="donorLastName" className="mb-3">
                                    <Form.Label className={classes.formLabel}>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="donorEmail" className="mb-3">
                                    <Form.Label className={classes.formLabel}>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="donorPhone" className="mb-3">
                                    <Form.Label className={classes.formLabel}>Phone Number</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="creditCard" className="mb-3 mt-5">
                            <Form.Label className={classes.formLabel}>Credit Card</Form.Label>
                            <Form.Control
                                type="text"
                                name="cardNumber"
                                value={form.cardNumber}
                                onChange={handleChange}
                                placeholder="1234 5678 9012 3456"
                                required
                                className="text-center"
                            />
                            <Form.Text muted className={classes.disclaimer}>
                                For demonstration only. We can use Stripe for secure processing on go live.
                            </Form.Text>
                        </Form.Group>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="donationAmount" className="mb-3 text-start">
                                    <Form.Label className={classes.formLabel}>Donation Amount</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            name="amount"
                                            value={form.amount}
                                            onChange={handleChange}
                                            placeholder="Donation Amount"
                                            required
                                            min="1"
                                        />
                                    </InputGroup>
                                </Form.Group>

                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="donationCategory" className="mb-3">
                                    <Form.Label className={classes.formLabel}>Apply My Donation To</Form.Label>
                                    <Form.Select
                                        name="category"
                                        value={form.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select an option</option>
                                        <option value="Resident Education">Resident Education</option>
                                        <option value="Travel Scholarships">Travel Scholarships</option>
                                        <option value="Mentoring & Leadership Training">Mentoring & Leadership Training</option>
                                        <option value="Community Outreach">Community Outreach</option>
                                        <option value="Research & Publication">Research & Publication</option>
                                        <option value="Unrestricted">Unrestricted (Use Where Needed Most)</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="donorMessage" className="mb-4">
                            <Form.Label className={classes.formLabel}>Optional Message</Form.Label>
                            <Form.Control
                                type="text"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="In honor of..."
                            />
                        </Form.Group>

                        <div className="text-center" style={{ marginTop: '24px' }}>
                            <Button variant="primary" type="submit">
                                Donate Now
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </section>
    );
};

export default DonationForm;