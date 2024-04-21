// Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
 // Import CSS for styling
import './register.css'


function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onRegister function with the entered credentials
    onRegister({ username, password });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input class="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input class="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button class="submit" type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p> {/* Link to login page */}
    </div>
  );
}

export default Register;
