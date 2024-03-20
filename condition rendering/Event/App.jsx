import React from 'react';
import AlertClock from './AlertClock';

function App() {
  const handleAlert = () => {
    alert(new Date().toLocaleTimeString());
  };

  return (
    <div>
      <h1>App Component</h1>
      <AlertClock onAlert={handleAlert} />
    </div>
  );
}

export default App;
