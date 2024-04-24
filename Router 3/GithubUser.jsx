import React, { useState, useEffect } from 'react';

function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`}/>
      <p>Login: {user.login}</p>
    </div>
  );
}

export default GithubUser;


