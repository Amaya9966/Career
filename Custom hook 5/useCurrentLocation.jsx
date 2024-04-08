import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null); // Stato per la posizione corrente
  const [loading, setLoading] = useState(true); // Stato per il caricamento
  const [error, setError] = useState(null); // Stato per gli errori

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Quando la posizione viene trovata con successo
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setLoading(false);
        },
        (error) => {
          // Quando si verifica un errore
          setError(error.message);
          setLoading(false);
        }
      );
    };

    // Chiamata alla funzione per ottenere la posizione corrente
    getLocation();
  }, []); // Effetto viene eseguito solo al primo render

  return { location, loading, error };
};

export default useCurrentLocation;