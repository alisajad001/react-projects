import React from 'react';

function TodoList({ state, dispatch }) {
  return (
    <div className="todo-list">
      <div className="todos-head">
        <h2>Tasks</h2>
        <p>
          {state.todos?.length} {state.todos?.length === 1 ? 'todo' : 'todos'}
        </p>
      </div>

      <ul className="todo-list">
        {state.todos?.map((todo) => {
          return (
            <li key={todo}>
              {todo}{' '}
              <span
                className="remove-icon"
                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: todo })}
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
