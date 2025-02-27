import { useState } from "react";
import Logout from "../components/Logout";
const AdminAddNewRoutine = () => {
    const [routine, setRoutine] = useState({
        id: "",
        name: "",
        level: "beginner",
        workouts: [{ id: "placeholder", name: "placeholder" }],
    });

    const handleInputChange = (e) => {
        setRoutine({ ...routine, [e.target.name]: e.target.value });
    };

    return (
        <div className="User-profile">
           <Logout/>

            <div className="User-exercise-container">
                <div className="admin-add-new-routine-head">
                    <div className="admin-add-new-routine-name">
                        <p>Name</p>
                        <input
                            type="text"
                            name="name"
                            value={routine.name}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="admin-add-new-routine-level">
                        <p>Level</p>
                        <select
                            name="level"
                            value={routine.level}
                            onChange={handleInputChange}
                        >
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                </div>
                <div className="admin-add-new-routine-days">
                    <ul>
                        {routine.workouts.map((workout) => (
                            <li key={workout.id}>
                                <p>Mon</p>
                                <p>{workout.name}</p>
                                <button>Edit</button>
                            </li>
                        ))}

                        {routine.workouts.map((workout) => (
                            <li key={workout.id}>
                                <p>Tue</p>
                                <p>{workout.name}</p>
                                <button>Edit</button>
                            </li>
                        ))}

                        {routine.workouts.map((workout) => (
                            <li key={workout.id}>
                                <p>Wed</p>
                                <p>{workout.name}</p>
                                <button>Edit</button>
                            </li>
                        ))}

                        {routine.workouts.map((workout) => (
                            <li key={workout.id}>
                                <p>Thu</p>
                                <p>{workout.name}</p>
                                <button>Edit</button>
                            </li>
                        ))}

                        {routine.workouts.map((workout) => (
                            <li key={workout.id}>
                                <p>Fri</p>
                                <p>{workout.name}</p>
                                <button>Edit</button>
                            </li>
                        ))}

                        {routine.workouts.map((workout) => (
                            <li key={workout.id}>
                                <p>Sat</p>
                                <p>{workout.name}</p>
                                <button>Edit</button>
                            </li>
                        ))}

                        {routine.workouts.map((workout) => (
                            <li key={workout.id}>
                                <p>Sun</p>
                                <p>{workout.name}</p>
                                <button>Edit</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="admin-add-new-routine-save-buttons">
                    <button>Confirm</button>
                </div>{" "}
            </div>
        </div>
    );
};

export default AdminAddNewRoutine;
