import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../components/Logout";

const  UsersBuildWorkout = () => {
  const [showMuscleDropdown, setShowMuscleDropdown] = useState(false);
  const [showEquipmentDropdown, setShowEquipmentDropdown] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState("Select Muscle");
  const [selectedEquipment, setSelectedEquipment] =
    useState("Select Equipment");
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercises] = useState([]);
  const [userWorkout, setUserWorkout] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { day, workoutName, workoutId } = location.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Workout ID:", workoutId);
  }, [workoutId]);

  const userId = JSON.parse(window.localStorage.getItem("id"));
  const equipmentOptions = ["Machines", "Free Weights", "Body Weight"];
  const muscleOptions = [
    "Chest",
    "Back",
    "Legs",
    "Shoulders",
    "Biceps",
    "Triceps",
  ];

  useEffect(() => {
    axios
      .get("http://localhost/php-react/firstfitness/userGetExercises.php")
      .then((response) => {
        setExercises(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching exercises:", err);
        setError("Failed to load exercises");
        setLoading(false);
      });
  }, []);

  const handleMuscleSelect = (muscle) => {
    setSelectedMuscle(muscle);
    setShowMuscleDropdown(false);
  };

  const handleEquipmentSelect = (equipment) => {
    setSelectedEquipment(equipment);
    setShowEquipmentDropdown(false);
  };

  const handleResetFilters = () => {
    setSelectedMuscle("Select Muscle");
    setSelectedEquipment("Select Equipment");
    setSearchTerm("");
  };

  const handleAddExercise = (exercise) => {
    axios
      .post("http://localhost/php-react/firstfitness/useraddUserWorkout.php", {
        userId: userId,
        exerciseId: exercise.id,
        workoutId: workoutId,
      })
      .then(() => {
        setUserWorkout([...userWorkout, exercise]);
        alert(`${exercise.name} added to your workout!`);
        navigate(-1);
      })
      .catch((err) => {
        console.error("Error adding exercise:", err);
        alert("Failed to add exercise.");
      });
  };

  const equipmentMap = {
    1: "Machines",
    2: "Free Weights",
    3: "Body Weight",
  };

  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch = exercise.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesMuscle =
      selectedMuscle === "Select Muscle" ||
      exercise.muscle_group === selectedMuscle;
    const matchesEquipment =
      selectedEquipment === "Select Equipment" ||
      equipmentMap[exercise.equipment_needed] === selectedEquipment;

    return matchesSearch && matchesMuscle && matchesEquipment;
  });

  return (
    <div className="User-profile">
   <Logout/>

      <div className="User-build-exercise-container">
        <div className="user-build-search">
          <div className="user-build-search-divider">
            <div
              className="muscle-filter"
              onClick={() => setShowMuscleDropdown(!showMuscleDropdown)}
            >
              <p>{selectedMuscle}</p>
              {showMuscleDropdown && (
                <ul className="dropdown">
                  {muscleOptions.map((option) => (
                    <li key={option} onClick={() => handleMuscleSelect(option)}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div
              className="equipment-filter"
              onClick={() => setShowEquipmentDropdown(!showEquipmentDropdown)}
            >
              <p>{selectedEquipment}</p>
              {showEquipmentDropdown && (
                <ul className="dropdown">
                  {equipmentOptions.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleEquipmentSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="user-search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleResetFilters} className="reset-button">
              Reset Filters
            </button>
          </div>
        </div>

        <div className="userworkout-container-body2">
          <ul>
            {filteredExercises.map((exercise) => (
              <li key={exercise.id}>
                <div className="user-exercise-left">
                  <h1>{exercise.name}</h1>
                  <h3>Muscle Group: {exercise.muscle_group}</h3>
                  <h3>
                    Equipment:{" "}
                    {equipmentMap[exercise.equipment_needed] || "Unknown"}
                  </h3>
                  <h3>Reps: {exercise.Exercise_Reps}</h3>
                  <h3>Sets: {exercise.Exercise_Sets}</h3>
                  <h3>Rest Between Sets: {exercise.Rest_Between_Sets}</h3>
                </div>

                <div className="user-exercise-right">
                  <div className="exercise-img-container">
                    <div className="exercise-image">
                      <img
                        src={`http://localhost/php-react/frontend/public/${exercise.img}`}
                        alt={exercise.name}
                      />
                    </div>
                  </div>
                </div>

                <div className="use-build-add-button">
                  <button onClick={() => handleAddExercise(exercise)}>
                    Add
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsersBuildWorkout;
