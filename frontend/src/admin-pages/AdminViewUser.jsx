import { useState } from "react";

const AdminViewUser = () => {
    const admin = "placeholder";

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

            <div className="User-exercise-container">
                <div className="admin-home-heading">
                    <h1>Admin: {admin}</h1>
                </div>

                <div className="admin-view-users-details">
                    <p>id: {user.id}</p>
                    <p>User Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Weight: {user.weight}</p>
                    <p>Experience Level: {user.experience}</p>
                    <p>Gender: {user.gender}</p>
                    <p>Workouts Complete: {user.workoutsComplete}</p>
                    <p>Age: {user.age}</p>
                </div>

                <div className="admin-view-users-heading">
                    <h1>Current Routine</h1>
                </div>

                <div className="admin-view-users-routine">
                    <div className="admin-view-users-routine-list">
                        <ul>
                            <li>
                                <p>Mon</p> <p>{usersworkout}</p>{" "}
                                <button>View</button>
                            </li>
                            <li>
                                <p>Tue</p> <p>{usersworkout}</p>{" "}
                                <button>View</button>
                            </li>
                            <li>
                                <p>Wed</p> <p>{usersworkout}</p>{" "}
                                <button>View</button>
                            </li>
                            <li>
                                <p>Thu</p> <p>{usersworkout}</p>{" "}
                                <button>View</button>
                            </li>
                            <li>
                                <p>Fri</p> <p>{usersworkout}</p>{" "}
                                <button>View</button>
                            </li>
                            <li>
                                <p>Sat</p> <p>{usersworkout}</p>{" "}
                                <button>View</button>
                            </li>
                            <li>
                                <p>Sun</p> <p>{usersworkout}</p>{" "}
                                <button>View</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminViewUser;
