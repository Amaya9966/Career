import React, { useState } from 'react';
import GithubUser from './GithubUser';


const GithubUsers = () => {
  const [username, setUsername] = useState(''); // Stato per il valore dell'input dell'utente
  const [users, setUsers] = useState([]); // Stato per la lista degli utenti trovati

  // Funzione per gestire la ricerca dell'utente
  const searchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${username}`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data.items); // Imposta la lista degli utenti trovati
      } else {
        throw new Error('Failed to fetch users');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Gestisce l'evento di submit del form
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser();
  };

  return (
    <div>
      {/* Form per la ricerca dell'utente */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Search</button>
      </form>
      {/* Lista degli utenti trovati */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <GithubUser username={user.login} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUsers;
