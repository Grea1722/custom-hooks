import { useEffect, useReducer } from "react";
import { ToDoReducer } from "../08-Reducer/ToDoReducer";

const initialState = [];
  
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

export const useTodos = () => {

    const [todos, dispatch] = useReducer(ToDoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos )) || [];
      }, [todos])

      const onNewTodo = (todo) => {
        const action = {
          type: '[TODO] Add Todo',
          payload: todo
        }
    
        dispatch( action )
      }
    
      const handleDelete = (id) => {
        dispatch({
          type: '[TODO] Remove Todo',
          payload: id
        })
      }
    
      const handleToggleTodo = (id) => {
        dispatch({
          type: '[TODO] Toggle Todo',
          payload: id
        })
      }

      return {
        todos,
        onNewTodo,
        handleDelete,
        handleToggleTodo,
        handlePendientes: todos.filter(todo => !todo.done).length,
        handleTodos: todos.length,
      }


}