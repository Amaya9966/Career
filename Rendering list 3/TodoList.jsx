import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  // Funzione per gestire l'aggiunta di un nuovo todo
  const handleAddTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]); // Aggiunge il nuovo todo alla lista
      setTodoInput(''); // Pulisce l'input
    }
  };

  // Funzione per gestire la rimozione di un todo
  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Filtra i todos, escludendo l'elemento da rimuovere
    setTodos(updatedTodos); // Aggiorna la lista dei todos
  };

  // Funzione per gestire il reset della lista dei todos
  const handleResetTodos = () => {
    setTodos([]); // Svuota la lista dei todos
  };

  return (
    <div>
      {/* Input per aggiungere un nuovo todo */}
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      {/* Bottone per aggiungere un nuovo todo */}
      <button onClick={handleAddTodo}>Add Todo</button>
      {/* Bottone per resettare la lista dei todos */}
      <button onClick={handleResetTodos}>Reset Todos</button>
      {/* Lista dei todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* Pulsante "remove" per rimuovere il todo */}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
