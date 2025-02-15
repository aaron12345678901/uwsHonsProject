import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminViewUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .post(`http://localhost/php-react/firstfitness/adminGetuser.php?id=${id}`)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  const getExperienceLevel = () => {
    if (userData[0]?.experience === 0) {
      return "Beginner";
    } else if (userData[0]?.experience === 1) {
      return "Intermediate";
    } else {
      return "Advanced";
    }
  };

  const getWorkoutForDay = (day) => {
    const workoutForDay = userData.find(
      (entry) => entry?.day_of_week?.toLowerCase() === day.toLowerCase()
    );
    return workoutForDay
      ? { name: workoutForDay.workout_name, id: workoutForDay.workout_id }
      : { name: "Rest Day", id: null };
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

      <div className="User-exercise-container">
        <div className="admin-view-users-details">
          <p>id: {userData[0]?.id}</p>
          <p>Users Name: {userData[0]?.name}</p>
          <p>Email: {userData[0]?.email}</p>
          <p>
            Weight: {userData[0]?.weightstone}st {userData[0]?.weightpounds}lbs
          </p>
          <p>Experience Level: {getExperienceLevel()}</p>
          <p>Workouts Complete: {userData[0]?.workouts_complete}</p>
          <p>Age: {userData[0]?.age}</p>
        </div>

        <div className="admin-view-users-heading">
          <h1>Users Current Routine</h1>
        </div>

        <div className="admin-view-users-routine">
          <div className="admin-view-users-routine-list">
            <ul>
              {[
                { day: "Monday", short: "Mon" },
                { day: "Tuesday", short: "Tue" },
                { day: "Wednesday", short: "Wed" },
                { day: "Thursday", short: "Thu" },
                { day: "Friday", short: "Fri" },
                { day: "Saturday", short: "Sat" },
                { day: "Sunday", short: "Sun" },
              ].map(({ day, short }) => {
                const { name, id } = getWorkoutForDay(day);
                return (
                  <li key={day}>
                    <p>{short}</p> <p>{name}</p>
                    {id ? (
                      <Link
                        to={`/AdminusersWorkout/${id}`} // Navigate with workout ID
                        state={{
                          day: day,
                          workoutName: name,
                          workoutId: id,
                        }}
                      >
                        <button>View</button>
                      </Link>
                    ) : (
                      <button disabled>Rest Day</button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewUser;
