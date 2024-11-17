import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a React App' },
    { id: 3, text: 'Deploy React App' }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  return (
    <div className="App">
      <h1>its my react.js 3 file</h1>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
