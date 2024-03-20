// AlertClock.jsx
import React from 'react';

function AlertClock({ onAlert }) {
  return (
    <button onClick={onAlert}>Show Current Time</button>
  );
}

export default AlertClock;
