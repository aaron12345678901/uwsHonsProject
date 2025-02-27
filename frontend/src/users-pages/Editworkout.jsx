import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Logout from "../components/Logout";

const Editworkout = () => {
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

  let id = JSON.parse(window.localStorage.getItem("id"));

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        `http://localhost/php-react/firstfitness/GetUserWorkout.php?id=${id}&day=${day}`
      )
      .then((response) => {
        setUserData(response.data.exercises || []); // Store only exercises array
        console.log(response.data);
        if (response.data.workout_id) {
          setWorkoutId(response.data.workout_id);
          setNewWorkoutName(response.data.workout_name);
        }
        setLoading(false);
      });
  }, [id, day]);

  const handleCreateWorkout = () => {
    if (!newWorkoutName.trim()) {
      alert("Workout name cannot be empty.");
      return;
    }

    axios
      .post("http://localhost/php-react/firstfitness/userCreateWorkout.php", {
        user_id: id,
        name: newWorkoutName,
        day_of_week: day,
      })
      .then((response) => {
        console.log("API Response:", response.data);
        if (response.data.success) {
          setWorkoutId(response.data.workout_id);
          alert("Workout created successfully!");

          navigate(`/Userprofile`); // Navigate to the profile after creation
        } else {
          alert("Failed to create workout: " + response.data.error);

          navigate(`/Userprofile`); // Navigate to the profile after creation
        }
      })
      .catch((error) => {
        console.error("Error creating workout:", error);
        alert("An error occurred. Check the console for details.");
      });
  };

  const handleDelete = (exerciseName) => {
    if (!window.confirm("Are you sure you want to delete this exercise?"))
      return;

    axios
      .post("http://localhost/php-react/firstfitness/userDeleteExercise.php", {
        id,
        day,
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
   <Logout/>

      <div className="User-exercise-container">
        <div className="userworkout-container-heading">
          <h1>{day}</h1>
          <h2>Workout Name: {workoutName}</h2>
          <h2>Please enter name to begin</h2>
          <div className="workout-input-container">
            <input
              type="text"
              value={newWorkoutName}
              onChange={(e) => setNewWorkoutName(e.target.value)}
              placeholder="Enter workout name"
            />
            <button onClick={handleCreateWorkout}>
              {workoutId ? "Update Workout" : "Create Workout"}
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
                    <h3>time: {exercise.time}</h3>
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
            to="/UserBuildWorkout"
            state={{
              day: day,
              workoutName: newWorkoutName,
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

export default Editworkout;
