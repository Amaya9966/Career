// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';

ReactDOM.render(
  <div>
    <Welcome age={50} name="John" />
    <Welcome age={70} name="Elisa" />
    <Welcome age={13} name="Naples" />
    <Welcome age={13} name="Lidia" />
    <Welcome age={45} name="Nova" />
  </div>,
  document.getElementById('root')
);
