import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  
  const handleLogin = (e) => {
    e.preventDefault();

    
    setError({ email: "", password: "" });

    let isValid = true;

    
    if (!email) {
      setError((prev) => ({ ...prev, email: "Email is required" }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError((prev) => ({ ...prev, email: "Invalid email format" }));
      isValid = false;
    }

    
    if (!password) {
      setError((prev) => ({ ...prev, password: "Password is required" }));
      isValid = false;
    } else if (password.length < 6) {
      setError((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters",
      }));
      isValid = false;
    }

    
    if (isValid) {
      console.log("Login form submitted");
      navigate("/products");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error.email}
            helperText={error.email}
          />
        </div>
        <div className="form-group">
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error.password}
            helperText={error.password}
          />
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <p className="login-footer">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
