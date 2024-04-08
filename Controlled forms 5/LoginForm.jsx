import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    setFormSubmitted(true);

    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleReset = () => {
    const userNameBeforeReset = username;

    setUsername('');
    setPassword('');
    setFormSubmitted(false);

    alert(`Goodbye, ${userNameBeforeReset}!`);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      {formSubmitted && <p>Welcome, {username}!</p>}
    </div>
  );
};

export default LoginForm;
