import { useState } from "react";
import { useParams } from "react-router-dom";



const AdminAllExercises = () => {
    const [showMuscleDropdown, setShowMuscleDropdown] = useState(false);
    const [showEquipmentDropdown, setShowEquipmentDropdown] = useState(false);
    const [selectedMuscle, setSelectedMuscle] = useState("Select Muscle");
    const [selectedEquipment, setSelectedEquipment] =
        useState("Select Equipment");

    const equipmentOptions = ["Machines", "Free Weights", "Body Weight"];
    const muscleOptions = [
        "Chest",
        "Back",
        "Legs",
        "Shoulders",
        "Biceps",
        "Triceps",
      ];

    const { id } = useParams(); // Get workout ID from URL
    console.log(id);



    


    const Exercise = {
        exercises: [
            {
                id: "placeholder",
                exerciseName: "placeholder",
                muscleGroup: "",
                equipment: "",
                reps: "placeholder",
                sets: "placeholder",
                weight: "placeholder",
                img: "placeholder",
            },

            {
                id: "placeholder",
                exerciseName: "placeholder",
                muscleGroup: "",
                equipment: "",
                reps: "placeholder",
                sets: "placeholder",
                weight: "placeholder",
                img: "placeholder",
            },
        ],
    };

    const handleMuscleSelect = (muscle) => {
        setSelectedMuscle(muscle);
        console.log(muscle);
        setShowMuscleDropdown(false); // Close dropdown after selection
    };

    const handleEquipmentSelect = (equipment) => {
        setSelectedEquipment(equipment);
        console.log(equipment);
        setShowEquipmentDropdown(false); // Close dropdown after selection
    };

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

            <div className="User-build-exercise-container">
                <div className="admin-all-exercise-search">
                    <div className="user-build-search-divider">
                        <div
                            className="muscle-filter"
                            onClick={() =>
                                setShowMuscleDropdown(!showMuscleDropdown)
                            }
                        >
                            <p>{selectedMuscle}</p>
                            {showMuscleDropdown && (
                                <ul className="dropdown">
                                    {muscleOptions.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() =>
                                                handleMuscleSelect(option)
                                            }
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Equipment Filter */}
                        <div
                            className="equipment-filter"
                            onClick={() =>
                                setShowEquipmentDropdown(!showEquipmentDropdown)
                            }
                        >
                            <p>{selectedEquipment}</p>
                            {showEquipmentDropdown && (
                                <ul className="dropdown">
                                    {equipmentOptions.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() =>
                                                handleEquipmentSelect(option)
                                            }
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="admin-search-bar">
                        <input type="text" placeholder="Search..." />
                    </div>

                    <div className="admin-all-exercises-addExercise-button">
                        <button>Add Exercise</button>
                    </div>
                </div>

                <div className="userworkout-container-body2">
                    <ul>
                        <li>
                            <div className="user-exercise-left">
                                <h1>{Exercise.exercises[0].exerciseName}</h1>
                                <h3>reps: {Exercise.exercises[0].reps}</h3>
                                <h3>sets: {Exercise.exercises[0].sets}</h3>
                                <h3>
                                    Rest Between Sets:
                                    {Exercise.exercises[0].restBetweenSets}
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

                            <div className="admin-all-exercises-button-divider">
                                <div className="admin-all-edit-button">
                                    <button>Edit</button>
                                </div>
                                <div className="admin-all-delete-button">
                                    <button>Delete</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="user-exercise-left">
                                <h1>{Exercise.exercises[0].exerciseName}</h1>
                                <h3>reps: {Exercise.exercises[0].reps}</h3>
                                <h3>sets: {Exercise.exercises[0].sets}</h3>
                                <h3>
                                    Rest Between Sets:
                                    {Exercise.exercises[0].restBetweenSets}
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
                            <div className="admin-all-exercises-button-divider">
                                <div className="admin-all-edit-button">
                                    <button>Edit</button>
                                </div>
                                <div className="admin-all-delete-button">
                                    <button>Delete</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="user-exercise-left">
                                <h1>{Exercise.exercises[0].exerciseName}</h1>
                                <h3>reps: {Exercise.exercises[0].reps}</h3>
                                <h3>sets: {Exercise.exercises[0].sets}</h3>
                                <h3>
                                    Rest Between Sets:
                                    {Exercise.exercises[0].restBetweenSets}
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
                            <div className="admin-all-exercises-button-divider">
                                <div className="admin-all-edit-button">
                                    <button>Edit</button>
                                </div>
                                <div className="admin-all-delete-button">
                                    <button>Delete</button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="user-exercise-left">
                                <h1>{Exercise.exercises[0].exerciseName}</h1>
                                <h3>reps: {Exercise.exercises[0].reps}</h3>
                                <h3>sets: {Exercise.exercises[0].sets}</h3>
                                <h3>
                                    Rest Between Sets:
                                    {Exercise.exercises[0].restBetweenSets}
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
                            <div className="admin-all-exercises-button-divider">
                                <div className="admin-all-edit-button">
                                    <button>Edit</button>
                                </div>
                                <div className="admin-all-delete-button">
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

export default AdminAllExercises;
