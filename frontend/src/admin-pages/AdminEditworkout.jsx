import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AdminEditworkout = () => {
  const { id } = useParams(); // Get workout ID from URL
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [workoutId, setWorkoutId] = useState(null);
  const [newWorkoutName, setNewWorkoutName] = useState("");

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
          setNewWorkoutName(response.data.workout_name);
          console.log(response.data);
        }
        setLoading(false);
      });
  }, [id]);

  const handleUpdateWorkoutName = () => {
    if (!newWorkoutName.trim()) {
      alert("Workout name cannot be empty!");
      return;
    }

    axios
      .post(
        `http://localhost/php-react/firstfitness/adminUpdateWorkoutname.php?id=${id}`,
        {
          workout_id: workoutId,
          new_workout_name: newWorkoutName,
        }
      )
      .then((response) => {
        console.log(response.data); // Log the response to see if it's returning success
        if (response.data.success) {
          alert("Workout name updated successfully!");
        } else {
          alert("Failed to update workout name.");
        }
      })
      .catch((error) => {
        console.error("Error updating workout name:", error);
        alert("An error occurred.");
      });
  };

  const handleDelete = (exerciseName) => {
    if (!window.confirm("Are you sure you want to delete this exercise?"))
      return;

    axios
      .post("http://localhost/php-react/firstfitness/adminDeleteExercise.php", {
        id,
        exercise_name: exerciseName,
      })
      .then((response) => {
        if (response.data.success) {
          setUserData(
            userData.filter(
              (exercise) => exercise.exercise_name !== exerciseName
            )
          );
        } else {
          alert("Failed to delete exercise: " + response.data.error);
        }
      })
      .catch((error) => console.error("Error deleting exercise:", error));
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

      <div className="User-exercise-container">
        <div className="userworkout-container-heading">
          <div className="workout-input-container">
            <input
              type="text"
              value={newWorkoutName}
              onChange={(e) => setNewWorkoutName(e.target.value)}
              placeholder="Enter workout name"
            />
            <button onClick={handleUpdateWorkoutName}>
              {workoutId ? "Update Workout name" : "Create Workout"}
            </button>
          </div>
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
                  <div className="use-edit-delete-button">
                    <button
                      onClick={() => handleDelete(exercise.exercise_name)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="user-add-workout">
          <Link
            to="/AdminAddExerciseToWorkout"
            state={{
              workoutId: workoutId,
            }}
          >
            <div className="users-add-workout-button">
              <div className="add-exercise-img"></div>
              <h2>Add New Exercise</h2>
            </div>
          </Link>
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

export default AdminEditworkout;
