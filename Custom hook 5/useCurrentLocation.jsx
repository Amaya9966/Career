import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null); // Stato per la posizione corrente
  const [loading, setLoading] = useState(true); // Stato per il caricamento
  const [error, setError] = useState(null); // Stato per gli errori

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported by your browser");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setLoading(false);
        },
        (error) => {
          setError(`Error retrieving location: ${error.message}`);
          setLoading(false);
        }
      );
    };

    getLocation();

    // Clean-up function
    return () => {
      // Cancel getCurrentPosition if it's still in progress
      navigator.geolocation.clearWatch();
    };
  }, []);

  return { location, loading, error };
};

export default useCurrentLocation;
