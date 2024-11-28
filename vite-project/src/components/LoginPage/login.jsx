import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    let isValidUser = false;

for (const user of users) {
  if (user.email === email && user.password === password) {
    isValidUser = true;
    break;
  }
}

if (isValidUser) {
  console.log('Login successful');
  navigate('/products');
} else {
  setError('Invalid email or password');
}
  }

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
