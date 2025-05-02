import EventManager from '../containers/EventManager';
import ActivityLocation from '../containers/ActivityLocations';
import Beneficiaries from '../containers/Beneficiaries';
import { Card, Container, Row, Col } from "react-bootstrap";

import InvolvementPic from "../assets/AdobeStock_246948123.jpeg"

import classes from "../containers/Involvement.module.css"

const Involvement = () => {
    return (
        <>
            <section className={classes.banner}>
                <Container className={classes.textBannerContainer}>
                    <div className={classes.textBanner}>
                        <h2>Involvement</h2>
                        <p>Our mission is to advance the field of Oral & Maxillofacial Surgery (OMS) through education and clinical training for Oral & Maxillofacial Surgeons and OMS Residents.</p>
                    </div>
                </Container>
                <div className={classes.bannerImageWrapper}>
                    <img src={InvolvementPic} alt='Doctor Involvement' className={classes.bannerImage}></img>
                </div>
            </section>
            <Beneficiaries />
            <ActivityLocation />
            <EventManager />
        </>
    );
};

export default Involvement;
