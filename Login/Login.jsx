import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // Limita la lunghezza della password a 16 caratteri
    const inputPassword = event.target.value.substring(0, 16);
    setPassword(inputPassword);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          maxLength={16} // Imposta il limite di 16 caratteri per la password
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="remember"
          checked={remember}
          onChange={handleRememberChange}
        />
        <label htmlFor="remember">Remember Me</label>
      </div>
      <button>Log In</button>
    </div>
  );
};

export default Login;
