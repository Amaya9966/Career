import React from 'react';

class UncontrolledLogin extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault(); // Previene il comportamento predefinito del form

    // Accesso ai valori del form utilizzando l'API del DOM
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('Username (DOM API):', username);
    console.log('Password (DOM API):', password);

    // Accesso ai valori del form utilizzando l'API FormData
    const formDataObj = Object.fromEntries(formData.entries());
    console.log('Form Data (FormData API):', formDataObj);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Campo di input per l'username */}
        <label>
          Username:
          <input type="text" name="username" />
        </label>

        {/* Campo di input per la password */}
        <label>
          Password:
          <input type="password" name="password" />
        </label>

        {/* Bottone di invio del form */}
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default UncontrolledLogin;
