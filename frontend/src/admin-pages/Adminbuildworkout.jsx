import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Adminbuildworkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { day, workoutName } = location.state || {
    day: "No day selected",
    workoutName: "",
  };

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newWorkoutName, setNewWorkoutName] = useState(workoutName || "");
  const [workoutId, setWorkoutId] = useState(null);
  const [level, setLevel] = useState(""); // Added level state

  let id = JSON.parse(window.localStorage.getItem("id"));

  const handleCreateWorkout = () => {
    if (!newWorkoutName.trim() || !level.trim()) {
      alert("Workout name and level cannot be empty.");
      return;
    }

    axios
      .post("http://localhost/php-react/firstfitness/adminCreateWorkout.php", {
        user_id: id,
        name: newWorkoutName,
        level: level, // Sending level to backend
      })
      .then((response) => {
        console.log("Workout created:", response.data);
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error creating workout:", error);
        alert("An error occurred. Check the console for details.");
      });
  };

  const totalWorkoutTime = userData.reduce(
    (total, exercise) => total + (exercise.time || 0),
    0
  );

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

      <div className="admin-build-container">
        <div className="userworkout-container-heading">
          <div className="admin-workout-input-container">
              
            <h2>please enter the name and level of new workout</h2>

            <input
              type="text"
              value={newWorkoutName}
              onChange={(e) => setNewWorkoutName(e.target.value)}
              placeholder="Enter workout name:"
            />
            <input
              type="text"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              placeholder="Enter workout level (e.g., Beginner, Intermediate, Advanced)"
            />
            <div className="register-form-buttons">
              <button onClick={handleCreateWorkout}>
                {workoutId ? "Update Workout" : "Create Workout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminbuildworkout;
