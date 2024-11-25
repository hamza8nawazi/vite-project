import React from 'react';
import {  TextField, Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    navigate('/products');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <TextField label="Email" type="email" fullWidth required />
        </div>
        <div className="form-group">
          <TextField label="Password" type="password" fullWidth required />
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
