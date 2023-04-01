import React from 'react';

const Card = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="card">
      <p
        className={`${task.completed ? 'card__completed' : ''}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="card__icons">
        <i
          className="bi bi-pencil-square"
          onClick={() => editTodo(task.id)}
        ></i>
        <i className="bi bi-trash3" onClick={() => deleteTodo(task.id)}></i>
      </div>
    </div>
  );
};

export default Card;
