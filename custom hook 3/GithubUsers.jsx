import React, { useState } from 'react';

// Custom hook per la ricerca degli utenti GitHub
const useGithubUserSearch = () => {
  const [username, setUsername] = useState(''); // Stato per il valore dell'input dell'utente
  const [users, setUsers] = useState([]); // Stato per la lista degli utenti trovati
  const [loading, setLoading] = useState(false); // Stato per indicare se la ricerca è in corso
  const [error, setError] = useState(null); // Stato per gestire eventuali errori

  const searchUser = async () => {
    setLoading(true); // Imposta lo stato di caricamento
    setError(null); // Resetta l'errore

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${username}`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data.items); // Imposta la lista degli utenti trovati
      } else {
        throw new Error('Failed to fetch users');
      }
    } catch (err) {
      setError(err.message); // Imposta l'errore
    } finally {
      setLoading(false); // Termina lo stato di caricamento
    }
  };

  return {
    username,
    setUsername,
    users,
    searchUser,
    loading,
    error,
  };
};

// Componente principale che utilizza il custom hook
const GithubUsers = () => {
  const {
    username,
    setUsername,
    users,
    searchUser,
    loading,
    error,
  } = useGithubUserSearch(); // Uso del custom hook

  // Gestisce l'evento di submit del form
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(); // Avvia la ricerca
  };

  return (
    <div>
      {/* Form per la ricerca dell'utente */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit" disabled={loading}>Search</button> {/* Disabilita se sta caricando */}
      </form>

      {/* Gestione degli errori */}
      {error && <div>Error: {error}</div>}

      {/* Stato di caricamento */}
      {loading && <div>Loading...</div>}

      {/* Lista degli utenti trovati */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.login} {/* Nome dell'utente GitHub */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUsers;
