import { useState } from "react";

const Userprofile = () => {


    const user = {
        id: "placeholder",
        name: "placeholder",
        email: "placeholder",
        weight: "placeholder",
        experience: "placeholder",
        gender: "placeholder",
        workoutsComplete: "placeholder",
        age: "placeholder",
    };


    const usersworkout = "workout name";






    return (
        <div className="User-profile">
            <div className="nav">
                <ul>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Log out</a>
                    </li>
                </ul>
            </div>

            <div className="User-profile-container">
                <div className="profile-top-section">
                    <div className="profile-top-section-left">
                        <div className="profile-top-section-left-order">
                            <h2>Name:</h2> <h2>{user.name}</h2>
                        </div>
                        <div className="profile-top-section-left-order">
                            <h2>weight:</h2> <h2>{user.weight}</h2>
                        </div>
                        <div className="profile-top-section-left-order">
                            <h2>Exp level:</h2> <h2>{user.experience}</h2>
                        </div>
                        <div className="profile-top-section-left-order">
                            <h2>Workouts Complete:</h2> <h2>{user.workoutsComplete}</h2>
                        </div>
                    </div>

                    <div className="profile-top-section-right">
                        <button>Weigh-in</button>
                    </div>
                </div>

                <div className="profile-new-routine-position">
                    <a className="profile-new-routine" href="">
                        <p>New Routine</p>
                    </a>
                </div>

                <div className="users-workout">
                    <ul>
                        <li>
                            <div className="users-workout-row">
                                <div className="users-workout-row-day">
                                    <p>Mon</p>
                                </div>

                                <div className="users-workout-row-workout">
                                    <p>{usersworkout}</p>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Start</button>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Edit</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="users-workout-row">
                                <div className="users-workout-row-day">
                                    <p>Tue</p>
                                </div>

                                <div className="users-workout-row-workout">
                                    <p>{usersworkout}</p>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Start</button>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Edit</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="users-workout-row">
                                <div className="users-workout-row-day">
                                    <p>wed</p>
                                </div>

                                <div className="users-workout-row-workout">
                                    <p>{usersworkout}</p>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Start</button>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Edit</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="users-workout-row">
                                <div className="users-workout-row-day">
                                    <p>Thu</p>
                                </div>

                                <div className="users-workout-row-workout">
                                    <p>{usersworkout}</p>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Start</button>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Edit</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="users-workout-row">
                                <div className="users-workout-row-day">
                                    <p>Fri</p>
                                </div>

                                <div className="users-workout-row-workout">
                                    <p>{usersworkout}</p>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Start</button>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Edit</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="users-workout-row">
                                <div className="users-workout-row-day">
                                    <p>Sat</p>
                                </div>

                                <div className="users-workout-row-workout">
                                    <p>{usersworkout}</p>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Start</button>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Edit</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="users-workout-row">
                                <div className="users-workout-row-day">
                                    <p>Sun</p>
                                </div>

                                <div className="users-workout-row-workout">
                                    <p>{usersworkout}</p>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Start</button>
                                </div>
                                <div className="users-workout-row-button">
                                    <button>Edit</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Userprofile;
