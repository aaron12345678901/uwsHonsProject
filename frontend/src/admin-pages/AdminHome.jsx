import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminHome = () => {
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
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="Admin-Home">
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
        <div className="admin-home-heading">
          <h1>Admin Name: {userData[0]?.name}</h1>
        </div>

        <div className="admin-home-links">
          <div className="admin-home-links-left">
            <Link to="/AdminAllUsers" className="admin-home-left-img">
              
            </Link>

            <h2>Users</h2>
          </div>

          <div className="admin-home-links-right">
            <Link to="/AdminPreMadeRoutines" className="admin-home-right-img">
              
            </Link>

            <h2>Workouts</h2>
          </div>
        </div>


        <div className=".admin-home-bottom-link">
          <div className="admin-home-links-bottom">
            <Link to="/AdminAllExercises" className="admin-home-bottom-img">
            
            </Link>

            <h2>Exercises</h2>
          </div>

         
        </div>











        {/* <div className="admin-home-links-right">

          <Link to="/AdminPreMadeRoutines" >
            <a className="admin-home-right-img" href=""></a>
            </Link>


            <h2>Workouts</h2>
          </div> */}
      </div>
    </div>
  );
};

export default AdminHome;
