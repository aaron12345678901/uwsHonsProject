import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Logout from "../components/Logout";
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



  const handleDeleteworkout = (id) => {
    if (window.confirm("Are you sure you want to delete this workout?")) {
      axios
        .post("http://localhost/php-react/firstfitness/adminDeletepremadeworkout.php", {
          id: id,
        })
        .then((response) => {
          alert(response.data.message);
          console.log("Deleting workout with ID:", id);
  
         
          setUserData((prevData) => prevData.filter((workout) => workout.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting pre made workout:", error);
        });
    }
  };

  return (
    <div className="Admin-add-Exercise">
     <Logout/>
      <div className="admin-exercise-container-all">
        <div className="admin-pre-made-heading">
          <h2>Pre-Built Workouts</h2>
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
                  <h3>Name: {data.name}</h3>
                  <p>Level: {data.level}</p>
                </div>
                <div className="admin-pre-made-routines-list-right">
                  <div className="admin-button-divider">
                    <Link to={`/AdminEditworkout/${data.id}`}>
                      <button>Edit</button>
                    </Link>


                    <button onClick={() => handleDeleteworkout(data.id)}>Delete</button>


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
