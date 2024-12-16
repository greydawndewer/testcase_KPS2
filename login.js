import React, { useState } from 'react';
import '../assets/style.css';

const Login = () => {
  // State to manage username and password
  const [username, setUsername] = useState('teacher1');
  const [password, setPassword] = useState('password123');
  const [resultsVisible, setResultsVisible] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    console.log('Username:', username);
    console.log('Password:', password);
    // For demonstration, we'll just show the results
    setResultsVisible(true);
  };

  return (
    <div className="main-content">
      <h3>Teacher Login</h3>
      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        /><br /><br />

        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        /><br /><br />

        <button type="submit">Login</button>
      </form>

      {resultsVisible && (
        <div id="results"> 
          <h2>Results</h2>
          <p id="presidentResults">President Results</p>
          <p id="vicePresidentResults">Vice President Results</p>
        </div>
      )}
    </div>
  );
};

export default Login;