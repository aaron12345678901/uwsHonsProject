import { useState } from "react";

const AdminAllUsers = () => {


    const admin = "placeholder";

    const UsersName = "placeholder";


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
                    <h1>Admin: {admin}</h1>
                </div>

                <div className="Admin-all-users-heading">
                    <h2>All Registerd Users</h2>
                </div>

                <div className="admin-all-users-list-container">
                    <ul>
                        <li>
                            <div className="admin-all-users-list-left">
                                <h2>Name:</h2> <h2>{UsersName}</h2>
                            </div>
                            <div className="admin-all-users-list-right">
                              <button>View</button>  <button>Delete</button>
                            </div>
                        </li>
                        <li>
                            <div className="admin-all-users-list-left">
                                <h2>Name:</h2> <h2>{UsersName}</h2>
                            </div>
                            <div className="admin-all-users-list-right">
                              <button>View</button>  <button>Delete</button>
                            </div>
                        </li>
                        <li>
                            <div className="admin-all-users-list-left">
                                <h2>Name:</h2> <h2>{UsersName}</h2>
                            </div>
                            <div className="admin-all-users-list-right">
                              <button>View</button>  <button>Delete</button>
                            </div>
                        </li>
                        <li>
                            <div className="admin-all-users-list-left">
                                <h2>Name:</h2> <h2>{UsersName}</h2>
                            </div>
                            <div className="admin-all-users-list-right">
                              <button>View</button>  <button>Delete</button>
                            </div>
                        </li>
                        <li>
                            <div className="admin-all-users-list-left">
                                <h2>Name:</h2> <h2>{UsersName}</h2>
                            </div>
                            <div className="admin-all-users-list-right">
                              <button>View</button>  <button>Delete</button>
                            </div>
                        </li>
                        <li>
                            <div className="admin-all-users-list-left">
                                <h2>Name:</h2> <h2>{UsersName}</h2>
                            </div>
                            <div className="admin-all-users-list-right">
                              <button>View</button>  <button>Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>


            
            </div>
        </div>
    );
};

export default AdminAllUsers;
