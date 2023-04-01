import React, { useState } from 'react';

const CardEdit = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        type="text"
        value={value}
        key={task.id}
        onChange={(e) => setValue(e.target.value)}
        className="todoForm__input"
        placeholder="Update task"
      />
      <button type="submit" className="todoForm__submit">
        Edit task
      </button>
    </form>
  );
};

export default CardEdit;
