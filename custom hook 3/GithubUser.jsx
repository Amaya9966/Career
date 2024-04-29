import React from 'react';

// Custom hook per il recupero dei dati di un utente GitHub
const useGithubUserData = (username) => {
  const [userData, setUserData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true); // Imposta lo stato di caricamento su true
      setError(null); // Resetta gli errori

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Imposta i dati dell'utente
        } else {
          throw new Error('Failed to fetch user data'); // Solleva un errore se la risposta non è ok
        }
      } catch (error) {
        setError(error.message); // Imposta l'errore
      } finally {
        setLoading(false); // Termina lo stato di caricamento
      }
    };

    if (username) {
      fetchUserData(); // Avvia il recupero dei dati solo se il nome utente è definito
    }
  }, [username]); // Esegue l'effetto quando il nome utente cambia

  return {
    userData,
    loading,
    error,
  };
};

const GithubUser = ({ username }) => {
  const { userData, loading, error } = useGithubUserData(username);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <img
        src={userData.avatar_url}
        alt="Profile"
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      />
      <h2>User: {userData.login}</h2>
      <p>Name: {userData.name}</p>
      <p>Location: {userData.location}</p>
      <p>Public Repositories: {userData.public_repos}</p>
    </div>
  );
};

export default GithubUser;
