import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Make sure to import the CSS

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-container">
      <div className="auth-container">
        <h2 className="text-center mb-4">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
            Register
          </button>
        </form>

        <div className="auth-footer">
          <p className="text-center mt-3">Already have an account?</p>
          <Link
            to="/login"
            className="auth-link btn btn-found w-100"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;