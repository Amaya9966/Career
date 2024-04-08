import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';

const Main = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
