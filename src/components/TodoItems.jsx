import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";

const TodoItem = () => {
  const todos = useSelector((state) => state.todos);
  const [inputEditId, setInputEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const dispatch = useDispatch();

  const handleUpdate = (id, todo) => {
    setInputEditId(id);
    setNewText(todo);
  };

  const handlesaveUpdate = (id) => {
    dispatch(updateTodo({ id, todo: newText }));
    setInputEditId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-items w-100 d-flex flex-column gap-2 rounded-2">
          <div className="todo-individual d-flex p-3 w-90 justify-content-between mb-2 custom-color rounded-2 m-1">
            {inputEditId === todo.id ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="form-control me-2"
              />
            ) : (
              <h1 className="border-0 custom-color todo-title rounded-2">{todo.todo}</h1>
            )}

            <div className="btn-wrapper d-flex gap-2">
              {inputEditId === todo.id ? (
                <>
                  <button
                    className="btn btn-success"
                    onClick={() => handlesaveUpdate(todo.id)}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setInputEditId(null);
                    }}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleUpdate(todo.id, todo.todo)}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
