import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const AdminPreMadeRoutines = () => {
  const PreMadeRoutines = {
    exercise: {
      id: "placeholder",
      name: "placeholder",
      level: "placeholder",
    },
  };

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        `http://localhost/php-react/firstfitness/adminGetpremadeworkouts.php`
      )
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="Admin-add-Exercise">
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
      <div className="admin-exercise-container-all">
        <div className="admin-pre-made-heading">
          <h1>Pre-Built Workouts</h1>
        </div>

        <div className="admin-pre-made-routines-add-new-button">
          <Link to="/Adminbuildworkout">
            <button>Add New Workout</button>
          </Link>
        </div>

        <div className="admin-pre-made-routines-list-container">
          <ul>
            {userData.map((data) => (
              <li key={data.id}>
                <div className="admin-pre-made-routines-list-left">
                  <h3>{data.name}</h3>
                  <p>Level: {data.level}</p>
                </div>
                <div className="admin-pre-made-routines-list-right">
                  <div className="admin-button-divider">
                    <Link to={`/AdminEditworkout/${data.id}`}>
                      <button>Edit</button>
                    </Link>
                    <button>Delete</button>
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

export default AdminPreMadeRoutines;
