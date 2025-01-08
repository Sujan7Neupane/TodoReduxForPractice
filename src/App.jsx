import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItems";

function App() {
  return (
      <div className="wrapper w-100 bg-primary custom-height d-flex d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="todo px-4 bg-light rounded-2 py-5">
            <h1 className="text-center mb-3 text-black-50">Todo app</h1>
            <TodoForm />
            <TodoItem />
          </div>
        </div>
      </div>
  );
}

export default App;
