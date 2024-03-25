import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';

const Main = () => {
  return (
    <div>
      <h1>Clock App</h1>
      <Clock />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

export default Main;
