import { useState } from "react";
import Logout from "../components/Logout";
const AdminEditRoutineWorkout = () => {
    const AdminPreMadeWorkout = {
        day: "placeholder",
        workoutName: "placeholder",
        exercises: [
            {
                id: 1,
                exerciseName: "placeholder",
                sets: "placeholder",
                reps: "placeholder",
                restBetweenSets: "placeholder",
                img: "placeholder",
            },
            {
                id: 2,
                exerciseName: "placeholder",
                sets: "placeholder",
                reps: "placeholder",
                restBetweenSets: "placeholder",
                img: "placeholder",
            },
            {
                id: 3,
                exerciseName: "placeholder",
                sets: "placeholder",
                reps: "placeholder",
                restBetweenSets: "placeholder",
                img: "placeholder",
            },
            {
                id: 4,
                exerciseName: "placeholder",
                sets: "placeholder",
                reps: "placeholder",
                restBetweenSets: "placeholder",
                img: "placeholder",
            },
        ],
        WorkoutEstDuration: "placeholder",
    };

    return (
        <div className="User-profile">
           <Logout/>

            <div className="User-exercise-container">
                <div className="admin-add-workout-to-routine-heading-container-heading">
                    <h1>{AdminPreMadeWorkout.day} for day</h1>
                    <p>workout name: {AdminPreMadeWorkout.workoutName}</p>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder={AdminPreMadeWorkout.workoutName}
                    />
                </div>

                <div className="userworkout-container-body2">
                    <ul>
                        <li>
                            <div className="user-exercise-left">
                                <h1>
                                    {
                                        AdminPreMadeWorkout.exercises[0]
                                            .exerciseName
                                    }
                                </h1>
                                <h3>
                                    reps:{" "}
                                    {AdminPreMadeWorkout.exercises[0].reps}
                                </h3>
                                <h3>
                                    sets:{" "}
                                    {AdminPreMadeWorkout.exercises[0].sets}
                                </h3>
                                <h3>
                                    Rest Between Sets:
                                    {
                                        AdminPreMadeWorkout.exercises[0]
                                            .restBetweenSets
                                    }
                                </h3>
                            </div>

                            <div className="user-exercise-right">
                                <div className="exercise-img-container">
                                    <div className="exercise-image">
                                        <img
                                            src="/exercise-images/benchpress.jpg"
                                            alt="dfd"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="use-edit-delete-button">
                                <button>Delete</button>
                            </div>
                        </li>

                        <li>
                            <div className="user-exercise-left">
                                <h1>
                                    {
                                        AdminPreMadeWorkout.exercises[0]
                                            .exerciseName
                                    }
                                </h1>
                                <h3>
                                    reps:{" "}
                                    {AdminPreMadeWorkout.exercises[0].reps}
                                </h3>
                                <h3>
                                    sets:{" "}
                                    {AdminPreMadeWorkout.exercises[0].sets}
                                </h3>
                                <h3>
                                    Rest Between Sets:
                                    {
                                        AdminPreMadeWorkout.exercises[0]
                                            .restBetweenSets
                                    }
                                </h3>
                            </div>

                            <div className="user-exercise-right">
                                <div className="exercise-img-container">
                                    <div className="exercise-image">
                                        <img
                                            src="/exercise-images/benchpress.jpg"
                                            alt="dfd"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="use-edit-delete-button">
                                <button>Delete</button>
                            </div>
                        </li>

                        <li>
                            <div className="user-exercise-left">
                                <h1>
                                    {
                                        AdminPreMadeWorkout.exercises[0]
                                            .exerciseName
                                    }
                                </h1>
                                <h3>
                                    reps:{" "}
                                    {AdminPreMadeWorkout.exercises[0].reps}
                                </h3>
                                <h3>
                                    sets:{" "}
                                    {AdminPreMadeWorkout.exercises[0].sets}
                                </h3>
                                <h3>
                                    Rest Between Sets:
                                    {
                                        AdminPreMadeWorkout.exercises[0]
                                            .restBetweenSets
                                    }
                                </h3>
                            </div>

                            <div className="user-exercise-right">
                                <div className="exercise-img-container">
                                    <div className="exercise-image">
                                        <img
                                            src="/exercise-images/benchpress.jpg"
                                            alt="dfd"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="use-edit-delete-button">
                                <button>Delete</button>
                            </div>
                        </li>

                        <li>
                            <div className="user-exercise-left">
                                <h1>
                                    {
                                        AdminPreMadeWorkout.exercises[0]
                                            .exerciseName
                                    }
                                </h1>
                                <h3>
                                    reps:{" "}
                                    {AdminPreMadeWorkout.exercises[0].reps}
                                </h3>
                                <h3>
                                    sets:{" "}
                                    {AdminPreMadeWorkout.exercises[0].sets}
                                </h3>
                                <h3>
                                    Rest Between Sets:
                                    {
                                        AdminPreMadeWorkout.exercises[0]
                                            .restBetweenSets
                                    }
                                </h3>
                            </div>

                            <div className="user-exercise-right">
                                <div className="exercise-img-container">
                                    <div className="exercise-image">
                                        <img
                                            src="/exercise-images/benchpress.jpg"
                                            alt="dfd"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="use-edit-delete-button">
                                <button>Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="user-add-workout">
                    <a className="users-add-workout-button" href="#">
                        <div className="add-exercise-img"></div>
                        <h2>Add New Exercise</h2>
                    </a>
                </div>

                <div className="user-workout-footer">
                    <h1>
                        Total workout time (including rest): placeholder minutes
                    </h1>
                    <button>Confirm Edit</button>
                </div>
            </div>
        </div>
    );
};

export default AdminEditRoutineWorkout;
