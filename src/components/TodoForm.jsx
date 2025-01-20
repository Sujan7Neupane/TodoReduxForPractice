import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../features/todo/todoSlice'

const TodoForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('')
  };
  return (
    <form className="form mb-3" onSubmit={handleClick}>
      <div className="wrapper w-100 d-flex">
        <input
          type="text"
          className="w-100 p-2 mx-2"
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary px-5">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
