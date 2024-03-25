import React from 'react';

const ButtonWithImage = () => {
  const handleClick = (event) => {
    // Check if the target is an image
    if (event.target.tagName.toLowerCase() === 'img') {
      // If it's an image, print the src attribute
      console.log(event.target.src);
    } else {
      // If it's not an image, print the name attribute
      console.log(event.target.getAttribute('name'));
    }
  };

  return (
    <button onClick={handleClick} name="Eevee">
      <img src="https://i.pinimg.com/564x/2f/49/13/2f4913a0174ff40ddee9b2e9f65ac2fb.jpg" alt=" " />
      Click Me
    </button>
  );
};

export default ButtonWithImage;
