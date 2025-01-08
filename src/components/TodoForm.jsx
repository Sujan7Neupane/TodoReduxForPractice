import React from "react";

const TodoForm = () => {
  return (
    <form className="form mb-3">
      <div className="wrapper w-100 d-flex">
        <input
          type="text"
          className="w-100 p-2 mx-2"
          placeholder="Enter a todo"
        />
        <button className="btn btn-primary px-5">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
