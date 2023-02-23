
import { useTodos } from "../hooks";
import { ToDoAdd } from "./ToDoAdd";
import { ToDoList } from "./ToDoList";

export const ToDoApp = () => {

  const {todos, onNewTodo, handleDelete,handleToggleTodo, handlePendientes,handleTodos} = useTodos();

  return (
    <>
      <h1>
        To Do App {handleTodos} <small>Pendientes: {handlePendientes}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ToDoList
            todos={todos}
            deleteTodo={handleDelete}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar To Do</h4>
          <hr />

          <ToDoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
