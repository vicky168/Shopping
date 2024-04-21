import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import First from './First';
import Product from './Product';


function App() {
// Initialize isLoggedIn as true

  const handleLogin = () => {
    // No need to set isLoggedIn as true here since it's always true
  };

  const handleRegister = () => {
    // No need to set isLoggedIn as true here since it's always true
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="Register" element={<Register onRegister={handleRegister} />} />
          
            <Route path="First" element={<First />} />
            <Route path="Product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
