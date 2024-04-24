import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ShowGithubUser() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <p>User not found</p>;
  }

 
  return (
    <div>
      <h2>{user.login}</h2>
    </div>
  );
}

export default ShowGithubUser;