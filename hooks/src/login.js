import React, { useState } from 'react';
import './login.css';

function Login() {
  const [username, setusername] = useState('sajeda momani');
  const [password, setpassword] = useState('987654321');

  function handelemaail(e) {
    setusername(e.target.value);
  }

  function handelpassword(e) {
    setpassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    
    handelemaail(); 
    handelpassword(); 
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} method="POST">
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <h4>Username is : {username} </h4>
        <input type="text" id="username" name="username" value={username} onChange={handelemaail} required />
        <h4>password is : {password} </h4>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handelpassword} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
