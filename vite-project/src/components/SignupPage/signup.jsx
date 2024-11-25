import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./signup.css"
const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted");
    navigate('/products');
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <TextField label="Name" fullWidth required />
        </div>
        <div className="form-group">
          <TextField label="Email" type="email" fullWidth required />
        </div>
        <div className="form-group">
          <TextField label="Password" type="password" fullWidth required />
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      <p className="signup-footer">
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default SignupPage;
