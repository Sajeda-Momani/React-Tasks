import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import Home from './home';
import Register from './login';
import Login from './register';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/login" >Login</NavLink>
        <NavLink to="/register" >Register</NavLink>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Register />} />
        <Route path="/register" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;