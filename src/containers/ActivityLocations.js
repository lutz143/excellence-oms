import React from "react";
import classes from "../css/ActivityLocations.module.css";

export default function EventManager() {

    return (
        <section className={classes.locationSection}>
            <div className={classes.locationHeader}>
                <h2>Conference Locations</h2>
                <p>We frequently attend conferences across the United States</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <style>
                    {`
                            .pulse {
                            animation: pulse 2s infinite;
                            transform-origin: center;
                            }

                            @keyframes pulse {
                            0% {
                                r: 6;
                                opacity: 1;
                            }
                            50% {
                                r: 12;
                                opacity: 0.3;
                            }
                            100% {
                                r: 6;
                                opacity: 1;
                            }
                            }
                        `}
                </style>
                <svg viewBox="0 0 1000 600" width="90%" style={{ maxWidth: "800px" }}>
                    {/* Background Map Image */}
                    <image href={`${process.env.PUBLIC_URL}/images/us.svg`} x="0" y="0" width="1000" height="600" style={{ opacity: 0.15 }} />

                    {/* Chicago Marker */}
                    <g>
                        <circle className="pulse" cx="707" cy="210" fill="rgb(0, 150, 255)" r="6" />
                        <circle cx="707" cy="210" r="6" fill="rgb(0, 150, 255)" stroke="#fff" strokeWidth="2" />
                        <text x="707" y="190" textAnchor="middle" fontSize="20" fill="#333">Chicago: AAOMS Dental Implant Conference</text>
                    </g>

                    {/* St. Louis Marker */}
                    <g>
                        <circle className="pulse" cx="672" cy="278" fill=" rgb(0, 150, 255)" r="6" />
                        <circle cx="672" cy="278" r="6" fill="rgb(0, 150, 255)" stroke="#fff" strokeWidth="2" />
                        <text x="670" y="260" textAnchor="middle" fontSize="20" fill="#333">St. Louis</text>
                    </g>
                </svg>
            </div>
        </section>
    );
}