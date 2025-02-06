import { useState } from "react";

const AdminPreMadeRoutines = () => {
    const PreMadeRoutines = {
        exercise: {
            id: "placeholder",
            name: "placeholder",
            level: "placeholder",
        },
    };

    return (
        <div className="Admin-add-Exercise">
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
            <div className="admin-exercise-container-all">
                <div className="admin-pre-made-heading">
                    <h1>Pre-Built Routines</h1>
                </div>

                <div className="admin-pre-made-routines-add-new-button">
                    <button>Add New Routine</button>
                </div>

                <div className="admin-pre-made-routines-list-container">
                    <ul>
                        <li>
                            <div className="admin-pre-made-routines-list-left">
                                <h3>{PreMadeRoutines.exercise.name}</h3>
                                <p>Level: {PreMadeRoutines.exercise.level}</p>
                            </div>
                            <div className="admin-pre-made-routines-list-right">
                                <div className="admin-button-divider">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="admin-pre-made-routines-list-left">
                                <h3>{PreMadeRoutines.exercise.name}</h3>
                                <p>Level: {PreMadeRoutines.exercise.level}</p>
                            </div>
                            <div className="admin-pre-made-routines-list-right">
                                <div className="admin-button-divider">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="admin-pre-made-routines-list-left">
                                <h3>{PreMadeRoutines.exercise.name}</h3>
                                <p>Level: {PreMadeRoutines.exercise.level}</p>
                            </div>
                            <div className="admin-pre-made-routines-list-right">
                                <div className="admin-button-divider">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="admin-pre-made-routines-list-left">
                                <h3>{PreMadeRoutines.exercise.name}</h3>
                                <p>Level: {PreMadeRoutines.exercise.level}</p>
                            </div>
                            <div className="admin-pre-made-routines-list-right">
                                <div className="admin-button-divider">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="admin-pre-made-routines-list-left">
                                <h3>{PreMadeRoutines.exercise.name}</h3>
                                <p>Level: {PreMadeRoutines.exercise.level}</p>
                            </div>
                            <div className="admin-pre-made-routines-list-right">
                                <div className="admin-button-divider">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="admin-pre-made-routines-list-left">
                                <h3>{PreMadeRoutines.exercise.name}</h3>
                                <p>Level: {PreMadeRoutines.exercise.level}</p>
                            </div>
                            <div className="admin-pre-made-routines-list-right">
                                <div className="admin-button-divider">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminPreMadeRoutines;
