import React from "react";
// import { NavLink } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import DonationForm from "../containers/DonationForm";

import classes from "../css/Donors.module.css"
import bgImage from "../assets/AdobeStock_170237839.jpeg"

const Donors = () => {
    return (
        <>
            <main className={classes.mainContainer} style={{ '--bg-image': `url(${bgImage})` }}>
                <section style={{ position: 'relative', zIndex: 2 }}>
                    <div className={classes.donorBanner}>
                        <Container className={classes.donorWrapper}>
                            <h2>Support the Future of Oral & Maxillofacial Surgery</h2>
                        </Container>
                    </div>
                    <div className={classes.headline}>
                        <Container>
                            <p>At <span className={classes.titleSpan}><span className={classes.title}>Excellence </span>  in OMS</span>, your generosity fuels a powerful mission: to educate, empower, and uplift the next generation of oral and maxillofacial surgeons—while extending compassionate care to underserved communities.</p>
                        </Container>
                    </div>
                    <section>
                        <Container className={classes.cardContainer}>
                            <div className={classes.cardRowSplit}>
                                <Card className={classes.donorInfoCard}>
                                    <Card.Title className={classes.cardTitleCustom}>Excellence in Education</Card.Title>
                                    <Card.Header className={classes.cardHeaderCustom}>This is our largest funding area. Your donation helps:</Card.Header>
                                    <Card.Body>
                                        <ul>
                                            <li>Cover tuition and registration fees for hands-on training, continuing education courses, and surgical workshops.</li>
                                            <li>Fund travel and lodging costs for residents and students attending national OMS conferences, where they present research or gain exposure to current advancements.</li>
                                            <li>Provide mentorship stipends for structured learning experiences with leaders in the field.</li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Footer className={classes.cardFooterCustom}>Impact Example: A resident attending an advanced implant course they otherwise couldn’t afford can now bring those skills directly to their patients.</Card.Footer>
                                </Card>

                                <Card className={classes.donorInfoCard}>
                                    <Card.Title className={classes.cardTitleCustom}>Excellence in Service</Card.Title>
                                    <Card.Header className={classes.cardHeaderCustom}>This is our largest funding area. Your donation helps:</Card.Header>
                                    <Card.Body>
                                        <ul>
                                            <li>Purchasing supplies and equipment for community dental clinics or mission-based surgery events.</li>
                                            <li>Supporting volunteer teams offering care in underserved urban or rural communities.</li>
                                            <li>Offsetting logistical costs such as transportation, facility rentals, and patient outreach for pop-up clinics.</li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Footer className={classes.cardFooterCustom}>Impact Example: A mobile surgical team providing free extractions and oral health screenings in low-access areas gets the tools and support they need to serve safely and effectively.</Card.Footer>
                                </Card>
                            </div>
                            <Row>
                                <Col xs={12}>
                                    <Card className={classes.donorInfoCard}>
                                        <Card.Title className={classes.cardTitleCustom}>Excellence in Research</Card.Title>
                                        <Card.Header className={classes.cardHeaderCustom}>This is our largest funding area. Your donation helps:</Card.Header>
                                        <Card.Body>
                                            <ul>
                                                <li>Resident-led clinical studies and public health research in oral and maxillofacial surgery.</li>
                                                <li>Publication costs in peer-reviewed journals.</li>
                                                <li>Educational content production like surgical manuals, newsletters, and case studies for a broader professional audience.</li>
                                            </ul>
                                        </Card.Body>
                                        <Card.Footer className={classes.cardFooterCustom}>Impact Example: A promising researcher receives a grant to publish a study on improving surgical outcomes for cleft lip/palate patients.</Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </section>
            </main>
            <section>
                <Container>
                    <div>
                        <Row>
                            <div className={classes.donnorApply}>
                                <div className={classes.textBanner}>
                                    <h2>How to Donate</h2>
                                    <p>Donating is as simple as filling out the below form or contacting us here.</p>
                                </div>
                            </div>
                        </Row>
                    </div>
                    <div className={classes.donationForm}>
                        <DonationForm />
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Donors;
