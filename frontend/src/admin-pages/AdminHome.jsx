import { useState } from "react";

const AdminHome = () => {
    return (
        <div className="Admin-Home">
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
                    <h1>Admin: (placeholder)</h1>
                </div>

                <div className="admin-home-links">
                    <div className="admin-home-links-left">
                        <a className="admin-home-left-img" href=""></a>
                        <h2>Users</h2>
                    </div>

                    <div className="admin-home-links-right">
                        <a className="admin-home-right-img" href=""></a>
                        <h2>Workouts</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
