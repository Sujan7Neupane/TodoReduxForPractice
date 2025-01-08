import React from "react";

const TodoItem = () => {
  return (
    <div className="todo-items w-100 d-flex flex-column gap-2 rounded-2">
      <div className="todo-individual d-flex p-3 w-90 justify-content-between mb-2 custom-color rounded-2 m-1">
        {/* <input type="text" value="todo" className="form-control me-2" /> */}

        <h1 className="border-0 custom-color todo-title rounded-2">todo</h1>

        <div className="btn-wrapper d-flex gap-2">
          <>
            {/* <button
              onClick={() => saveUpdate(todo.id)}
              className="btn btn-success"
            >
              Save
            </button>
            <button
              onClick={() => setEditingId(null)}
              className="btn btn-secondary"
            >
              Cancel
            </button> */}
          </>
          <>
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-danger">Delete</button>
          </>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
