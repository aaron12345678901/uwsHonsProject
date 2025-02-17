import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminAllUsers = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true);
    axios
      .post(`http://localhost/php-react/firstfitness/adminGetallUsers.php`)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .post("http://localhost/php-react/firstfitness/adminDeleteUsers.php", {
          id: userId,
        })
        .then((response) => {
          alert(response.data.message);
          fetchUsers(); // Refresh the user list after deletion
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  return (
    <div className="Admin-all-users">
      <div className="nav">
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Log out</a></li>
        </ul>
      </div>

      <div className="User-exercise-container">
        <div className="Admin-all-users-heading">
          <h2>All Registered Users</h2>
        </div>

        <div className="admin-all-users-list-container">
          {loading ? <p>Loading users...</p> : null}
          <ul>
            {userData.map((user) => (
              <li key={user.id}>
                <div className="admin-all-users-list-left">
                  <h2>Name:</h2> <h2>{user.name}</h2>
                </div>
                <div className="admin-all-users-list-right">
                  <Link to={`/AdminViewUser/${user.id}`}>
                    <button>View</button>
                  </Link>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminAllUsers;