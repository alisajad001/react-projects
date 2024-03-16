import { useState } from 'react';
import { ACTIONS } from '../App';

function Form({ dispatch }) {
  const [name, setName] = useState('');

  // Handle on submit
  function handleOnSubmit(e) {
    e.preventDefault();

    if (name === '') {
      alert('Please add a title');
    } else {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
      setName('');
    }
  }

  return (
    <form id="form" onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="title..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
