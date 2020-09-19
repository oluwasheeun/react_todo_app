import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputHandler = e => {
    setInputText(e.target.value);
  };

  const submitHandler = e => {
    if (inputText === '') {
      alert('Please enter todo');
    } else {
      e.preventDefault();
      setTodos([...todos, { text: inputText, id: uuidv4(), completed: false }]);
      setInputText('');
    }
  };

  const statusHandler = e => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={inputText}
        onChange={inputHandler}
        type='text'
        className='todo-input'
      />
      <button className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select onChange={statusHandler} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
