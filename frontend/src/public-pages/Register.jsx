import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    weightstone: "",
    weightlbs: "",
    password: "",
    confirmPassword: "",
    experience: "Beginner",
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

    // Ensure form validation on the frontend
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost/php-react/firstfitness/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert(data.message);
        setFormData({
          name: "",
          email: "",
          age: "",
          weightstone: "",
          weightlbs: "",
          password: "",
          confirmPassword: "",
          experience: "Beginner",
        });
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const handleExperienceClick = (experienceLevel) => {
    setFormData({
      ...formData,
      experience: experienceLevel,
    });
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
            <Link to="/login">Sign-in</Link>
          </li>
        </ul>
      </div>

      <div className="register-body-container">
        <div className="register-form-container">
          <div className="register-heading">
            <h1>Register new account</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="register-form-divider">
              <div className="register-form-left">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name:"
                />
                <br />

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
                  id="age"
                  name="age"
                  type="text"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter age:"
                />
                <br />

                <input
                  id="weightstone"
                  name="weightstone"
                  type="text"
                  value={formData.weightstone}
                  onChange={handleChange}
                  placeholder="Enter weight st:"
                />

                <input
                  id="weightlbs"
                  name="weightlbs"
                  type="text"
                  value={formData.weightlbs}
                  onChange={handleChange}
                  placeholder="Enter weight lbs:"
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

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password:"
                />
                <br />

                <div className="register-form-buttons">
                  <button type="submit">Register</button>
                  <p>
                    Already have an account? <Link to="/login">Sign-in</Link>
                  </p>
                </div>
              </div>

              <div className="register-form-right">
                <fieldset>
                  <legend>Experience Level</legend>

                  <div
                    className={`Exp-container-first ${
                      formData.experience === "Beginner" ? "selected" : ""
                    }`}
                    onClick={() => handleExperienceClick("Beginner")}
                  >
                    <label>
                      <input
                        name="experience"
                        type="radio"
                        value="Beginner"
                        checked={formData.experience === "Beginner"}
                        onChange={handleChange}
                      />
                      <h2>Beginner</h2>
                    </label>
                  </div>
                  <br />

                  <div
                    className={`Exp-container-second ${
                      formData.experience === "Intermediate" ? "selected" : ""
                    }`}
                    onClick={() => handleExperienceClick("Intermediate")}
                  >
                    <label>
                      <input
                        name="experience"
                        type="radio"
                        value="Intermediate"
                        checked={formData.experience === "Intermediate"}
                        onChange={handleChange}
                      />
                      <h2>Intermediate</h2>
                    </label>
                  </div>
                  <br />

                  <div
                    className={`Exp-container-third ${
                      formData.experience === "Advanced" ? "selected" : ""
                    }`}
                    onClick={() => handleExperienceClick("Advanced")}
                  >
                    <label>
                      <input
                        name="experience"
                        type="radio"
                        value="Advanced"
                        checked={formData.experience === "Advanced"}
                        onChange={handleChange}
                      />
                      <h2>Advanced</h2>
                    </label>
                  </div>
                  <br />
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;