import React from 'react';
import ReactDOM from 'react-dom';
import useCurrentLocation from './useCurrentLocation';

const Map = ({ latitude, longitude }) => {
  const mapUrl = `https://developers.google.com/maps?hl=it/${latitude}/${longitude}`;

  return (
    <div>
      <h2>Current Location:</h2>
      <iframe
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      ></iframe>
    </div>
  );
};

const App = () => {
  const { location, loading, error } = useCurrentLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {location && (
        <Map latitude={location.latitude} longitude={location.longitude} />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
