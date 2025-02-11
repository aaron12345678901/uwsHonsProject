import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersWorkout = () => {
  const location = useLocation();
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
      .post(
        `http://localhost/php-react/firstfitness/GetUserWorkout.php?id=${id}&day=${day}`
      )
      .then((response) => {
        setUserData(response.data);
        console.log("Response data:", response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id, day]);

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
      </div>
    </div>
  );
};

export default UsersWorkout;
