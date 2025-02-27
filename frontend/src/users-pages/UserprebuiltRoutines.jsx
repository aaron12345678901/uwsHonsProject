import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Logout from "../components/Logout";

const UserprebuiltRoutines = () => {
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
    <div className="User-profile">
     <Logout/>

      <div className="User-Prebuilt-container">
        <div className="user-pre-built-heading">
          <h1>Pre-Built Workouts</h1>
        </div>

        <div className="user-pre-built-list-container">
          <ul>
            {userData.map((data) => (
              <li key={data.id}>
                <div className="user-pre-built-list-left">
                  <h2>{data.name}</h2>
                  <p>Level: {data.level}</p>
                </div>
                <div className="user-pre-built-list-right">
                  <Link to={`/Userviewpremadeworkouts/${data.id}`}>
                    <button>View and start workout</button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserprebuiltRoutines;
