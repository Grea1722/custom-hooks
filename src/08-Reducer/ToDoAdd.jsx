import { useState } from "react";


export const ToDoAdd = ({ onNewTodo}) => {
    const [toDo, settoDo] = useState({
        id:new Date().getTime(),
        description: '',
        done:false,
    })

    const onInputChange = ({target}) => {
        const {name,value} = target;

        settoDo({
            ...toDo,
            [name]: value
        })
    }

    const onNewToDo = (event) => {
        event.preventDefault()

        if(toDo.description.length <= 1) return;
        
        settoDo({
          id:new Date().getTime(),
          description: '',
          done:false,
      })
    }
  return (
    <form onSubmit={onNewToDo}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        onChange={onInputChange}
        value={toDo.description}
        name="description"
      />

      <button 
      type="submit" 
      className="btn btn-outline-primary mt-1"
      onClick={() => onNewTodo(toDo)}>
        Agregar
      </button>
    </form>
  );
};
