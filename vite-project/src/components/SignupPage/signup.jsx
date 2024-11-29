import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const isValidPassword = (password) => {
  const hasUppercase = password.split('').some(char => char >= 'A' && char <= 'Z');
  const hasLowercase = password.split('').some(char => char >= 'a' && char <= 'z');
  const hasDigit = password.split('').some(char => !isNaN(char));
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";
  const hasSpecialChar = password.split('').some(char => specialCharacters.includes(char));
  const isAtLeastSixChars = password.length >= 6;

  return hasUppercase && hasLowercase && hasDigit && hasSpecialChar && isAtLeastSixChars;
};


const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    for (const user of users) {
      if (user.email === email) {
        setError('Email is already registered');
        return;
      }
    }

    if (!isValidPassword(password)) {
      setError("Password must include uppercase, lowercase, a number, and a special character, and be at least 6 characters long.");
      return;
    }

    

    const newUser = { name, email, password };
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    console.log('Signup successful. User data saved.');
    navigate('/');
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <TextField
            label="Name"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
