import React, { useEffect, useState } from 'react';
import '~less/App.less';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Card from '~/Card';
import TodoForm from '~/TodoForm';
import CardEdit from '~/CardEdit';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('task');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) =>
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const deleteAll = () => setTodos([], {});

  const toggleComplete = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const editTodo = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo,isEditing: !todo.isEditing } : todo
      )
    );

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <>
      <section>
        <h1>Things To Do!</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) =>
          todo.isEditing ? (
            <CardEdit editTodo={editTask} task={todo} key={todo.id}/>
          ) : (
            <Card
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
        {!todos.length ? (
          <p>No pending tasks</p>
        ) : (
          <button className="deleteBtn" onClick={deleteAll}>
            <i className="bi bi-trash3"></i>
            Delete All
          </button>
        )}
      </section>
      <p className="signature">Made by David Cortez</p>
    </>
  );
}

export default App;
