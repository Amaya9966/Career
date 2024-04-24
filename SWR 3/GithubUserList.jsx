import React, { useState } from 'react';
import { GithubUser } from './GithubUser';
import {useGithubUser} from './useGithubUser';

export const GithubUserList = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const { refetch: refetchUser } = useGithubUser(username); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([username]);
  };

  const handleRefresh = () => {
    refetchUser();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          name='inputUsername'
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search Github Username"
        />
        <button type="submit">Search</button>
        <button onClick={handleRefresh}>Refresh</button> 
      </form>

      {users.map((user, index) => (
        <GithubUser key={index} username={user} />
      ))}
    </div>
  );
};