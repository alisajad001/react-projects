import React from 'react';
import { ACTIONS } from '../App';

function TodoList({ todos, dispatch }) {
  return (
    <div className="todo-list">
      <div className="todos-head">
        <h2>Tasks</h2>
        <p>
          {todos?.length} {todos?.length === 1 ? 'todo' : 'todos'}
        </p>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.name}{' '}
              <span
                className="remove-icon"
                onClick={() =>
                  dispatch({
                    type: ACTIONS.REMOVE_TODO,
                    payload: { id: todo.id },
                  })
                }
              >
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
