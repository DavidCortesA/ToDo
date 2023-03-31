import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert('There is no task to add, fill in the field');
    } else {
      addTodo(value);
    }
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todoForm__input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todoForm__submit">
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
