import { useReducer } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

const initialState = {
  todoTitle: '',
  todos: [],
};

// Todo App Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'query':
      return { ...state, todoTitle: action.payload };
    case 'ADD_ITEM':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
      };
    case 'RESET_LIST':
      return (state = initialState);
    default:
      throw new Error('Action unknown');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <h1>Simple Todo App</h1>
      <p>A simple Todo App using useReducer hook for state management</p>

      {/* Form */}
      <Form state={state} dispatch={dispatch} />

      {/* Todo List */}
      <TodoList state={state} dispatch={dispatch} />

      {/* Clear All Button */}
      <button
        className="clear-all-btn"
        onClick={() => dispatch({ type: 'RESET_LIST' })}
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
