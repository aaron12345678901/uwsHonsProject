import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const url = `http://localhost/php-react/firstfitness/login.php?email=${formData.email}&password=${formData.password}`;
  
    try {
      const response = await axios.get(url);
  
      if (response.data.Status === "200") {
        const { name, email, id, is_admin, token } = response.data;
  
       console.log(response.data)


        // Store user details in local storage
        window.localStorage.setItem("userName", name);
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("id", id);
        window.localStorage.setItem("token", token);
  
        // Navigate based on admin status
        if (is_admin === "1") {
          navigate("/AdminHome");
        } else if (is_admin === "0") {
          navigate("/Userprofile");
        }
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  };


  return (
    <div className="Register-page">
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>

      <div className="login-body-container">
        <div className="login-form-container">
          <div className="login-heading">
            <h1>Welcome back</h1>
         
          </div>

          <form onSubmit={handleSubmit}>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email:"
            />
            <br />

            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password:"
            />
            <br />

            <div className="register-form-buttons">
              <button type="submit">Log in</button>
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
