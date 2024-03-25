import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

const Main = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Login />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

export default Main;
