import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then((result) => {
        if (result.data === "Success") {
          navigate("/home");
        } else {
          alert(result.data); // Show error message from server
        }
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data); // Show server error message
        } else {
          alert("An error occurred. Please try again.");
        }
      });
  };

  return (
    <div className="main-container">
      <div className="auth-container">
        <h2 className="text-center mb-4">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="auth-btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="auth-footer">
          <p className="text-center mt-3">Don't have an account?</p>
          <Link
            to="/register"
            className="auth-link btn btn-lost w-100"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;