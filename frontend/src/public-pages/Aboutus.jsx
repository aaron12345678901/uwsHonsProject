import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Aboutus = () => {

    return (
        <div className="Aboutus">
            <div className="nav-bar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/login">Sign-in</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>

            <div className="about-us-main">
                <div className="about-us-head">
                    <h1>Empowering Wellness Through Accessible Fitness</h1>
                    <p>
                        "Our mission is to bridge the gap in fitness
                        accessibility, helping individuals with chronic
                        conditions like diabetes live healthier lives."
                    </p>
                </div>
            </div>

            <div className="about-us-second-section">
                <h1>Our Mission</h1>
                <p>
                    At Firststep-fitness, we believe in the transformative power
                    of exercise. Our goal is to make fitness accessible,
                    affordable, and tailored for individuals managing chronic
                    conditions like type 2 diabetes. By combining evidence-based
                    research with innovative digital solutions, we aim to
                    empower individuals to take control of their health and
                    well-being.
                </p>
            </div>

            <div className="about-us-third">
                <div className="about-us-third">
                    <h1>Our Vision</h1>
                    <p>
                        "We envision a future where fitness and wellness are
                        within everyone's reach, regardless of financial or
                        physical limitations. By leveraging digital platforms,
                        we aim to eliminate barriers and support healthier
                        communities worldwide."
                    </p>
                </div>
            </div>

            <div className="about-us-fourth">
                <h1>What We Offer</h1>
                <ul>
                    <li>
                        Fitness Plans: Workouts tailored to individual needs.
                    </li>
                    <li>
                        Evidence-Based Guidance: Exercise routines informed by
                        research on managing diabete
                    </li>
                    <li>
                        Affordable Solutions: Fitness without the high cost of
                        personal trainers.
                    </li>
                    <li>
                        Inclusive Design: Accessible to users of all fitness
                        levels and backgrounds.
                    </li>
                </ul>
            </div>

            <div className="aboutus-bottom">
                <h2>"Start Your Fitness Journey Today!"</h2>

                <Link to="/register">
                <button>Sign up now!</button>
                </Link>

            </div>
        </div>
    );
};

export default Aboutus;
