import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UsersWorkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { day, workoutName } = location.state || {
    day: "No day selected",
    workoutName: "No workout selected",
  };

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  let id = JSON.parse(window.localStorage.getItem("id"));

  useEffect(() => {
    setLoading(true);
    axios
      .post(`http://localhost/php-react/firstfitness/GetUserWorkout.php?id=${id}&day=${day}`)
      .then((response) => {
        if (response.data && Array.isArray(response.data.exercises)) {
          setUserData(response.data.exercises);
        } else {
          console.error("Unexpected API response:", response.data);
          setUserData([]); // Fallback to an empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setUserData([]); // Handle error by ensuring userData is still an array
        setLoading(false);
      });
  }, [id, day]);

  const handlecomplet = () => {
    axios
      .post("http://localhost/php-react/firstfitness/workoutcomplete.php", {
        id: id,
      })
      .then(() => {
        alert("Workout completed!");
        navigate("/Userprofile"); // Navigate to the profile after completion
      })
      .catch((error) => {
        console.error("Error completing workout:", error);
      });
  };

  const totalWorkoutTime = Array.isArray(userData) 
  ? userData.reduce((total, exercise) => total + (exercise.time || 0), 0)
  : 0;

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

      <div className="User-exercise-container">
        <div className="userworkout-container-heading">
          <h1>{day}</h1>
          <h2>Workout Name: {workoutName}</h2>
        </div>

        <div className="userworkout-container-body2">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {userData.map((exercise, index) => (
                <li key={index}>
                  <div className="user-exercise-left">
                    <h1>{exercise.exercise_name}</h1>
                    <h3>Reps: {exercise.Exercise_Reps}</h3>
                    <h3>Sets: {exercise.Exercise_Sets}</h3>
                    <h3>
                      Rest Between Sets: {exercise.Rest_Between_Sets} minute(s)
                    </h3>
                  </div>

                  <div className="user-exercise-right">
                    <div className="exercise-img-container">
                      <div className="exercise-image">
                        <img
                          src={`http://localhost/php-react/frontend/public/${exercise.exercise_image}`}
                          alt={exercise.exercise_name}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="user-workout-footer">
          <h1>
            Total workout time (including rest): {totalWorkoutTime} minutes
          </h1>
        </div>
        <div className="user-workout-footer">
          <button onClick={handlecomplet}>Complete Workout</button>
        </div>
      </div>
    </div>
  );
};

export default UsersWorkout;
