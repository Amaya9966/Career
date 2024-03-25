import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';

const App = () => {
  return (
    <div>
      <h1>Clock App</h1>
      <Clock />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
