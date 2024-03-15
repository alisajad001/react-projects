function App() {
  return (
    <div className="app">
      <h1>Simple Todo App</h1>
      <p>A simple Todo App using useReducer hook for state management</p>
      <form id="form">
        <input type="text" placeholder="title..." />
        <button type="submit">Add</button>
      </form>

      {/* Todo List */}
      <div className="todos-head">
        <h2>Tasks</h2>
        <p>4 left</p>
      </div>
      <ul className="todo-list">
        <li>Go to gym</li>
        <li>Meet Kevin</li>
        <li>Daily meeting</li>
      </ul>
    </div>
  );
}

export default App;
