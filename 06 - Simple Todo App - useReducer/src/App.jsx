import { useReducer } from 'react';

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

  // Handle on submit
  function handleOnSubmit(e) {
    e.preventDefault();

    dispatch({ type: 'ADD_ITEM', payload: state.todoTitle });
    state.todoTitle = '';
  }

  return (
    <div className="app">
      <h1>Simple Todo App</h1>
      <p>A simple Todo App using useReducer hook for state management</p>
      <form id="form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="title..."
          value={state.todoTitle}
          onChange={(e) => dispatch({ type: 'query', payload: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>

      {/* Todo List */}
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
