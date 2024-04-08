import React from 'react';
import ReactDOM from 'react-dom';
import Colors from './Colors';

const colorsArray = [
  { id: 1, name: 'Red' },
  { id: 2, name: 'Green' },
  { id: 3, name: 'Blue' }
];

ReactDOM.render(<Colors colors={colorsArray} />, document.getElementById('root'));
