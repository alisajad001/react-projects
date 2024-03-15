function App() {
  return (
    <div className="app">
      <h1>Simple Todo App</h1>
      <p>A simple Todo App using useReducer hook for state management</p>
      <form id="form">
        <input type="text" placeholder="title..." />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
