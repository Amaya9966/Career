import React, { useState, useEffect } from 'react';


const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null); // Stato per i dati dell'utente
  const [loading, setLoading] = useState(true); // Stato per il caricamento dei dati

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true); // Imposta lo stato di caricamento su true

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Imposta i dati dell'utente
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Imposta lo stato di caricamento su false
      }
    };

    fetchUserData(); // Chiama la funzione per recuperare i dati dell'utente
  }, [username]);

  // Se lo stato di caricamento è true, mostra "Loading..."
  if (loading) {
    return <div>Loading...</div>;
  }

  // Se i dati dell'utente sono nulli, mostra "User not found"
  if (!userData) {
    return <div>User not found</div>;
  }

  // Se i dati dell'utente sono disponibili, mostra le informazioni dell'utente
  return (
    <div>
      <img src={userData.avatar_url} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <h2>User: {userData.login}</h2>
      <p>Name: {userData.name}</p>
      <p>Location: {userData.location}</p>
      <p>Public Repositories: {userData.public_repos}</p>
    </div>
  );
};

export default GithubUser;
