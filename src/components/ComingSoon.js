// src/components/ComingSoon.jsx
import React from 'react';
import classes from "../css/ComingSoon.module.css";

const ComingSoon = () => {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=handyman" />
            <section className={classes.comingSoonSection}>
                <div className={classes.container}>
                    <span class={classes.materialSymbolsOutlined}>
                        handyman
                    </span>
                    <h1 className={classes.comingSoonHeader}>Coming Soon</h1>
                    <p className="text-lg text-gray-600">We're working hard on this page. Stay tuned!</p>
                </div>
            </section>
        </>
    );
};

export default ComingSoon;
