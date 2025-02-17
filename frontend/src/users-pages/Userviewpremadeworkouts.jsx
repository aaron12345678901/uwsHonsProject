import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Userviewpremadeworkouts = () => {
  const { id } = useParams(); // Get workout ID from URL
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [workoutId, setWorkoutId] = useState(null);
  const [WorkoutName, setWorkoutName] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        `http://localhost/php-react/firstfitness/GetpremadeWorkout.php?id=${id}`
      )
      .then((response) => {
        setUserData(response.data.exercises || []);
        if (response.data.workout_id) {
          setWorkoutId(response.data.workout_id);
          setWorkoutName(response.data.workout_name);
          console.log(response.data);
        }
        setLoading(false);
      });
  }, [id]);

  



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

      <div className="User-exercise-container">
        <div className="userworkout-container-heading">
        <h1>{WorkoutName}</h1>
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
                    <h3>Time: {exercise.time} minutes</h3>
                    <h3>
                      Rest Between Sets: {exercise.Rest_Between_Sets} minute(s)
                    </h3>
                  </div>

                  <div className="user-exercise-right">
                    <div className="exercise-img-container">
                      <div className="exercise-image">
                        <img
                          src={`http://localhost/php-react/frontend/public/${exercise.img}`}
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
      </div>
    </div>
  );
};

export default Userviewpremadeworkouts;
