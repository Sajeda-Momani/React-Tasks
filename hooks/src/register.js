import React from 'react';
import './register.css';

function Register() {
  return (
      <div className="registration-container">
        <form className="registration-form" action="register.php" method="POST">
          <h2>Register</h2>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
          <button type="submit">Register</button>
        </form>
      </div>
  );
}

export default Register;
