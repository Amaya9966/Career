import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';

const App = () => {
  return (
    <div>
      <Container title="Container">
        <p>This is the content of the container.</p>
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
