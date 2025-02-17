import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminAllExercises = () => {
  const [showMuscleDropdown, setShowMuscleDropdown] = useState(false);
  const [showEquipmentDropdown, setShowEquipmentDropdown] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState("Select Muscle");
  const [selectedEquipment, setSelectedEquipment] =
    useState("Select Equipment");
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      .get("http://localhost/php-react/firstfitness/adminGetallexercises.php")
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

  const handleEdit = (exerciseId) => {
    // Redirect to the edit page with the exercise ID
    window.location.href = `/AdminEditExercise/${exerciseId}`;
  };

  const handleaddExercise = () => {
    // Redirect to the edit page with the exercise ID
    window.location.href = `/AdminAddExercise`;
  };


  const handleDelete = (exerciseId) => {
    if (window.confirm("Are you sure you want to delete this exercise?")) {
      axios
        .post("http://localhost/php-react/firstfitness/admindeletefullExercise.php", {
          id: exerciseId,
        })
        .then((response) => {
          alert("Exercise deleted successfully!");
          setExercises(exercises.filter((exercise) => exercise.id !== exerciseId));
        })
        .catch((error) => {
          console.error("Error deleting exercise:", error);
          alert("Failed to delete exercise.");
        });
    }
  }

 
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

            {/* Equipment Filter */}
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

          <div className="admin-search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          

          <div className="admin-all-exercises-addExercise-button">
          <button onClick={handleResetFilters} className="reset-button">
              Reset Filters
          </button>


            <button onClick={handleaddExercise}>Add Exercise</button>

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

                <div className="admin-all-exercises-button-divider">
                  <div className="admin-all-edit-button">
                    <button
                      value={exercise.id}
                      onClick={() => handleEdit(exercise.id)}
                    >
                      Edit
                    </button>
                  </div>
                  <div className="admin-all-delete-button">
                  <button onClick={() => handleDelete(exercise.id)}>Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminAllExercises;
