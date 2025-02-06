import { useState } from "react";

const AdminEditExercise = () => {
    const Exercise = {
        exercise: {
            id: "placeholder",
            exerciseName: "placeholder",
            muscleGroup: "placeholder",
            equipment: "placeholder",
            reps: "placeholder",
            sets: "placeholder",
            weight: "placeholder",
            img: "placeholder",
            resttime: "placeholder",
            totaltime: "placeholder",
        },
    };

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

            <div className="admin-exercise-container-all">
                <div className="admin-edit-exercise-container">
                    <div className="admin-edit-exercise-left">
                        <ul>
                            <li>
                                <label htmlFor="name">Exercise Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder={Exercise.exercise.exerciseName}
                                />
                            </li>
                            <li>
                                <label htmlFor="reps">Exercise Reps</label>
                                <input
                                    type="text"
                                    id="reps"
                                    placeholder={Exercise.exercise.reps}
                                />
                            </li>
                            <li>
                                <label htmlFor="sets">Exercise Sets</label>
                                <input
                                    type="text"
                                    id="sets"
                                    placeholder={Exercise.exercise.sets}
                                />
                            </li>
                            <li>
                                <label htmlFor="rest">Rest Between Sets</label>
                                <input
                                    type="text"
                                    id="rest"
                                    placeholder={Exercise.exercise.resttime}
                                />
                            </li>
                            <li>
                                <label htmlFor="TotalTimeToComplete">
                                    Total Time To Complete Exercise
                                </label>
                                <input
                                    type="text"
                                    id="TotalTimeToComplete"
                                    placeholder={Exercise.exercise.totaltime}
                                />
                            </li>
                        </ul>
                    </div>

                    <div className="admin-edit-exercise-right">
                        <div className="admin-edit-exercise-img-container">
                            <div className="admin-edit-exercise-image">
                                <img
                                    src="/exercise-images/benchpress.jpg"
                                    alt={Exercise.exercise.img}
                                />
                            </div>
                            <p>click to upload new image</p>
                        </div>

                        <div className="admin-edit-right-radios">
                            <div className="muscle-radio">
                                <p>Please select muscle group:</p>
                                <div className="radioItem">
                                    <input
                                        type="radio"
                                        id="Chest"
                                        name="muscle_group"
                                        value="Chest"
                                        className="radioButton"
                                    />
                                    <label htmlFor="Chest">Chest</label>
                                </div>
                                <div className="radioItem">
                                    <input
                                        type="radio"
                                        id="Back"
                                        name="muscle_group"
                                        value="Back"
                                        className="radioButton"
                                    />
                                    <label htmlFor="Back">Back</label>
                                </div>
                                <div className="radioItem">
                                    <input
                                        type="radio"
                                        id="Legs"
                                        name="muscle_group"
                                        value="Legs"
                                        className="radioButton"
                                    />
                                    <label htmlFor="Legs">Legs</label>
                                </div>
                                <div className="radioItem">
                                    <input
                                        type="radio"
                                        id="Shoulders"
                                        name="muscle_group"
                                        value="Shoulders"
                                        className="radioButton"
                                    />
                                    <label htmlFor="Shoulders">Shoulders</label>
                                </div>
                                <div className="radioItem">
                                    <input
                                        type="radio"
                                        id="Arms"
                                        name="muscle_group"
                                        value="Arms"
                                        className="radioButton"
                                    />
                                    <label htmlFor="Arms">Arms</label>
                                </div>
                            </div>

                            <div className="equipment-radio">
                                <p>Please select equipment type:</p>
                                <div className="radioItem">
                                    <input
                                        type="radio"
                                        id="Machines"
                                        name="equipment_type"
                                        value="Machines"
                                        className="radioButton"
                                    />
                                    <label htmlFor="Machines">Machines</label>
                                </div>
                                <div className="radioItem">
                                    <input
                                        type="radio"
                                        id="Free Weights"
                                        name="equipment_type"
                                        value="Free Weights"
                                        className="radioButton"
                                    />
                                    <label htmlFor="Free Weights">
                                        Free Weights
                                    </label>
                                </div>
                                <div className="radioItem">
                                    <input
                                        type="radio"
                                        id="Body Weight"
                                        name="equipment_type"
                                        value="Body Weight"
                                        className="radioButton"
                                    />
                                    <label htmlFor="Body Weight">
                                        Body Weight
                                    </label>
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="admin-edit-exercise-button">
                    <button>Confirm Edit</button>
                </div>
            </div>
        </div>
    );
};

export default AdminEditExercise;
