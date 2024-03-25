import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

const Main = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter initialValue={500} decrementAmount={5} />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

export default Main;
