import React, { useState } from 'react';
import {GitHubUser} from './GithubUser';

export const GithubUserList = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([username]);
    setUsername(''); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search Github Username"
        />
        <button type="submit">Search</button>
      </form>
      {users.map((user) => (
        <GitHubUser key={user.id} username={user} /> 
      ))}
    </div>
  )}