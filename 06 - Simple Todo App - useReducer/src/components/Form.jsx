function Form({ state, dispatch }) {
  // Handle on submit
  function handleOnSubmit(e) {
    e.preventDefault();

    if (state.todoTitle === '') {
      alert('Please add a title');
    } else {
      dispatch({ type: 'ADD_ITEM', payload: state.todoTitle });
    }

    state.todoTitle = '';
  }

  return (
    <form id="form" onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="title..."
        value={state.todoTitle}
        onChange={(e) => dispatch({ type: 'query', payload: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
