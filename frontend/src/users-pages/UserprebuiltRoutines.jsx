import { useState } from "react";







const PreMadeWorkouts = {
    PreBuiltRoutines: [
        {
              id: "placeholder",
              name: "Placeholder Routine",
              level: "placeholder",
        }

    ]
}













const UserprebuiltRoutines = () => {
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

            <div className="User-Prebuilt-container">
                <div className="user-pre-built-heading">
                    <h1>Pre-Built Routines</h1>
                </div>

                <div className="user-pre-built-list-container">
                    <ul>
                        <li>
                            <div className="user-pre-built-list-left">
                                <h2>{PreMadeWorkouts.PreBuiltRoutines[0].name}</h2>
                                <p>Level: {PreMadeWorkouts.PreBuiltRoutines[0].level}</p>
                            </div>
                            <div className="user-pre-built-list-right">
                                <button>View</button>
                                <button>Add</button>
                            </div>
                        </li>

                        <li>
                            <div className="user-pre-built-list-left">
                            <h2>{PreMadeWorkouts.PreBuiltRoutines[0].name}</h2>
                            <p>Level: {PreMadeWorkouts.PreBuiltRoutines[0].level}</p>
                            </div>
                            <div className="user-pre-built-list-right">
                                <button>View</button>
                                <button>Add</button>
                            </div>
                        </li>
                        <li>
                            <div className="user-pre-built-list-left">
                            <h2>{PreMadeWorkouts.PreBuiltRoutines[0].name}</h2>
                            <p>Level: {PreMadeWorkouts.PreBuiltRoutines[0].level}</p>
                            </div>
                            <div className="user-pre-built-list-right">
                                <button>View</button>
                                <button>Add</button>
                            </div>
                        </li>
                        <li>
                            <div className="user-pre-built-list-left">
                            <h2>{PreMadeWorkouts.PreBuiltRoutines[0].name}</h2>
                            <p>Level: {PreMadeWorkouts.PreBuiltRoutines[0].level}</p>
                            </div>
                            <div className="user-pre-built-list-right">
                                <button>View</button>
                                <button>Add</button>
                            </div>
                        </li>
                        <li>
                            <div className="user-pre-built-list-left">
                            <h2>{PreMadeWorkouts.PreBuiltRoutines[0].name}</h2>
                            <p>Level: {PreMadeWorkouts.PreBuiltRoutines[0].level}</p>
                            </div>
                            <div className="user-pre-built-list-right">
                                <button>View</button>
                                <button>Add</button>
                            </div>
                        </li>

                        <li>
                            <div className="user-pre-built-list-left">
                            <h2>{PreMadeWorkouts.PreBuiltRoutines[0].name}</h2>
                            <p>Level: {PreMadeWorkouts.PreBuiltRoutines[0].level}</p>
                            </div>
                            <div className="user-pre-built-list-right">
                                <button>View</button>
                                <button>Add</button>
                            </div>
                        </li>
                        <li>
                            <div className="user-pre-built-list-left">
                            <h2>{PreMadeWorkouts.PreBuiltRoutines[0].name}</h2>
                            <p>Level: {PreMadeWorkouts.PreBuiltRoutines[0].level}</p>
                            </div>
                            <div className="user-pre-built-list-right">
                                <button>View</button>
                                <button>Add</button>
                            </div>
                        </li>
                        <li>
                            <div className="user-pre-built-list-left">
                            <h2>{PreMadeWorkouts.PreBuiltRoutines[0].name}</h2>
                            <p>Level: {PreMadeWorkouts.PreBuiltRoutines[0].level}</p>
                            </div>
                            <div className="user-pre-built-list-right">
                                <button>View</button>
                                <button>Add</button>
                            </div>
                        </li>
                        <li>
                            <div className="user-pre-built-list-left">
                            <h2>{PreMadeWorkouts.PreBuiltRoutines[0].name}</h2>
                            <p>Level: {PreMadeWorkouts.PreBuiltRoutines[0].level}</p>
                            </div>
                            <div className="user-pre-built-list-right">
                                <button>View</button>
                                <button>Add</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserprebuiltRoutines;
