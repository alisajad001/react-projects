import { useReducer } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

// Actions
export const ACTIONS = {
  ADD_TODO: 'add-todo',
  REMOVE_TODO: 'remove-todo',
  RESET_ALL: 'reset-all',
};

// Todo App Reducer
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.REMOVE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.RESET_ALL:
      return (todos = []);
    default:
      throw new Error('Action unknown');
  }
}

// New todo Object
function newTodo(name) {
  return { id: Date.now(), name: name };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <div className="app">
      <h1>Simple Todo App</h1>
      <p>A simple Todo App using useReducer hook for state management</p>

      {/* Form */}
      <Form dispatch={dispatch} />

      {/* Todo List */}
      <TodoList todos={todos} dispatch={dispatch} />

      {/* Clear All Button */}
      <button
        className="clear-all-btn"
        onClick={() => dispatch({ type: ACTIONS.RESET_ALL })}
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
