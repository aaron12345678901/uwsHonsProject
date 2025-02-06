import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import homeheadImage from "../generic-img/home-head.svg";

const Home = () => {
    const homeFirstConRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = homeFirstConRef.current;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="Home">
            <div className="nav-bar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/login">Sign-in</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>

            <div className="home-head">
                <div className="home-head-welcome-message">
                    <h1 id="home-head">Welcome To </h1>
                    <h1>Firststep Fitness</h1>
                </div>
                <div className="home-head-separator">
                    <div className="home-head-message">
                        <p>
                            "Your journey starts here build strength, one step
                            at a time. Each rep, set, and challenge brings you
                            closer to your goals. Progress is a journey, not a
                            destination, so embrace the process and discover
                            your true strength."
                        </p>
                    </div>
                    <div className="home-head-container">
                        <div className="home-head-image"></div>
                    </div>
                </div>
            </div>

            <div className="home-body-con">
                <div
                    className={`home-first-con ${isVisible ? "visible" : ""}`}
                    ref={homeFirstConRef}
                >
                    <div className="home-first-con-left"></div>
                    <div className="home-first-con-right">
                        <h2>Your Fitness Journey Starts Here</h2>
                        <p>
                            No experience? No problem! Explore easy-to-follow
                            workouts tailored for beginners. Build confidence,
                            strength, and a healthier lifestyle one step at a
                            time.
                        </p>
                    </div>
                </div>
                <div
                    className={`home-second-con ${isVisible ? "visible" : ""}`}
                    ref={homeFirstConRef}
                >
                    <div className="home-second-con-left">
                        <h2>Fitness Meets Wellness</h2>
                        <p>
                            Discover how exercise can help manage diabetes. Our
                            specially designed routines support better blood
                            sugar control and overall health. Take charge of
                            your wellness today.
                        </p>
                    </div>
                    <div className="home-second-con-right"></div>
                </div>

                <div
                    className={`home-third-con ${isVisible ? "visible" : ""}`}
                    ref={homeFirstConRef}
                >
                    <div className="home-third-con-left"></div>
                    <div className="home-third-con-right">
                        <h2>Workouts That Fit Your Life</h2>
                        <p>
                            Customize your own workout plan or choose from
                            pre-built routines. Whether you're short on time or
                            have specific goals, we've got something for
                            everyone!
                        </p>
                    </div>
                </div>

                <div className="home-bottome-para-cont">
                    <div className="home-bottome-para">
                        <p>
                            Let's get your fitness journey started today! No
                            matter your experience level, there's a workout
                            designed just for you. With pre-built routines
                            tailored for beginners, intermediate, and advanced
                            levels, you can build strength, improve your
                            stamina, and gain confidence as you progress.
                            Signing up gives you access to expert tips and
                            guidance to help you stay motivated and on track
                            toward your fitness goals. Don’t wait for the
                            perfect time to begin your journey starts now, and
                            every step forward is a step toward a stronger,
                            healthier you!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
