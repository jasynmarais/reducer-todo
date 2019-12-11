import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </div>
);

export default TodoList;