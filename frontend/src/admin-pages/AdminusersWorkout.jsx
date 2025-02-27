import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Logout from "../components/Logout";
const AdminusersWorkout = () => {
  const { id } = useParams(); // Get workout ID from URL

  const location = useLocation();
  const { day, workoutName } = location.state || {}; // Get workout details from state
  const [workoutDetails, setWorkoutDetails] = useState(null);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .post(
        `http://localhost/php-react/firstfitness/AdminGetUsersWorkout.php?id=${id}`
      )
      .then((response) => {
        setWorkoutDetails(response.data);
        setUserData(response.data.exercises || []); // Set exercises to userData
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const totalWorkoutTime = userData.reduce(
    (total, exercise) => total + exercise.time,
    0
  );

  return (

    
    <div className="Admin-user-workout">


<Logout/>


  <div className="Admin-user-position">
      

      <div className="User-exercise-container">
      <div className="Admin-users-workout">
          <h1>Workout for {day}</h1>
           <h2>{workoutName}</h2>
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
      </div>


</div>

    </div>
  );
};
export default AdminusersWorkout;
