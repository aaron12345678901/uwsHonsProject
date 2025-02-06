import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Handle form submission
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
                                Dont have an account?{" "}
                                <Link to="/register">Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
