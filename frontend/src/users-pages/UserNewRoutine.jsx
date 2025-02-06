import { useState } from "react";

const UserNewRoutine = () => {


const Userworkout = {
    id: "placeholder",
    workoutname: 'Rest Day',

}


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
                <div className="User-new-routine-container">
                    <div className="user-new-routine-heading">
                        <h1>New Routine</h1>
                    </div>

                    <div className="user-new-routine-links">
                        <div className="user-new-routine-links-left">
                            <a className="user-new-routine-pre" href="">
                                <p>Pre built Routine</p>
                            </a>
                        </div>
                        <div className="user-new-routine-links-right">
                            <a className="user-new-routine-custom" href="">
                                <p>Custom Routine</p>
                            </a>
                        </div>
                    </div>

                    <div className="user-new-routine-list">
                        <ul>
                            <li>
                                <p>Mon</p> <p>{Userworkout.workoutname}</p>
                            </li>

                            <div className="user-new-routine-divider"></div>
                            <li>
                                <p>Tue</p> <p>{Userworkout.workoutname}</p>
                            </li>
                            <div className="user-new-routine-divider"></div>

                            <li>
                                <p>Wed</p> <p>{Userworkout.workoutname}</p>
                            </li>
                            <div className="user-new-routine-divider"></div>

                            <li>
                                <p>Thu</p> <p>{Userworkout.workoutname}</p>
                            </li>
                            <div className="user-new-routine-divider"></div>

                            <li>
                                <p>Fri</p> <p>{Userworkout.workoutname}</p>
                            </li>
                            <div className="user-new-routine-divider"></div>

                            <li>
                                <p>Sat</p> <p>{Userworkout.workoutname}</p>
                            </li>
                            <div className="user-new-routine-divider"></div>

                            <li>
                                <p>Sun</p> <p>{Userworkout.workoutname}</p>
                            </li>
                            <div className="user-new-routine-divider"></div>
                        </ul>
                    </div>

                   

                    <div className="user-new-routine-confirm-button">
                        <button>Confirm New Routine</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserNewRoutine;
