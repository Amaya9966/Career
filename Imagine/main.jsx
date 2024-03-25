import React from 'react';
import ReactDOM from 'react-dom';
import ButtonWithImage from './Button';

const Main = () => {
  return (
    <div>
      <h1>Image</h1>
      <ButtonWithImage />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

export default Main;
