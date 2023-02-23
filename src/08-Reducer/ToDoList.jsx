import { ToDoItem } from "./ToDoItem"


export const ToDoList = ({todos = [], deleteTodo, onToggleTodo}) => {

  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                 <ToDoItem key={todo.id} todo={todo} onDeleteTodo={ deleteTodo} onToggleTodo={onToggleTodo} />
            ))
        }
    </ul>
  )
}
