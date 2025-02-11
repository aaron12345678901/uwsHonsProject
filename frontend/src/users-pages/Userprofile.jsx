import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Userprofile = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  let id = JSON.parse(window.localStorage.getItem("id"));

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        `http://localhost/php-react/firstfitness/GetUserDetails.php?id=${id}`
      )
      .then((response) => {
        setUserData(response.data);
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
      (entry) => entry.day_of_week.toLowerCase() === day.toLowerCase()
    );
    return workoutForDay ? workoutForDay.workout_name : "Rest Day";
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

      <div className="User-profile-container">
        <div className="profile-top-section">
          <div className="profile-top-section-left">
            <div className="profile-top-section-left-order">
              <h2>Name:</h2> <h2>{userData[0]?.name}</h2>
            </div>
            <div className="profile-top-section-left-order">
              <h2>Weight:</h2> <h2>St.</h2> <h2>{userData[0]?.weightstone}</h2>{" "}
              <h2>Lbs.</h2> <h2>{userData[0]?.weightpounds}</h2>
            </div>
            <div className="profile-top-section-left-order">
              <h2>Exp level:</h2> <h2>{getExperienceLevel()}</h2>
            </div>
            <div className="profile-top-section-left-order">
              <h2>Workouts Complete:</h2>{" "}
              <h2>{userData[0]?.workouts_complete}</h2>
            </div>
          </div>

          <div className="profile-top-section-right">
            <button>Weigh-in</button>
          </div>
        </div>

        <div className="profile-new-routine-position">
          <a className="profile-new-routine" href="">
            <p>New Routine</p>
          </a>
        </div>

        <div className="users-workout">
          <ul>
            {[
              { day: "Monday", short: "Mon" },
              { day: "Tuesday", short: "Tue" },
              { day: "Wednesday", short: "Wed" },
              { day: "Thursday", short: "Thu" },
              { day: "Friday", short: "Fri" },
              { day: "Saturday", short: "Sat" },
              { day: "Sunday", short: "Sun" },
            ].map(({ day, short }) => (
              <li key={day}>
                <div className="users-workout-row">
                  <div className="users-workout-row-day">
                    <p>{short}</p>
                  </div>
                  <div className="users-workout-row-workout">
                    <p>{getWorkoutForDay(day)}</p>
                  </div>
                  <div className="users-workout-row-button">
                  <Link
  to="/UserWorkout"
  state={{
    day: day,
    workoutName: getWorkoutForDay(day),
  }}
>
  <button>Start</button>
</Link>

                  </div>
                  <div className="users-workout-row-button">
                    <button>Edit</button>
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

export default Userprofile;
