import React from 'react';
import Age from './Age';

function Welcome({ age, name }) {
  return (
    <div>
      {age > 18 && <Age age={age} name={name} />}
      {age !== undefined && <Age age={age} name={name} />}
      {age > 18 && age < 65 && <Age age={age} name={name} />}
      {age > 18 && age < 65 && name === "John" && <Age age={age} name={name} />}
    </div>
  );
}

export default Welcome;
