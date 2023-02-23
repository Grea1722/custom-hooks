import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: '',
        email: ''
    });


    const {username,email} = formState;
    //funcion para cambiar datos del input
    //target desestructuracion del evento onClick
    const onInputChange = ({target}) => {
        //desestructuracion name y value de target
        const {name,value}=target;
        setformState({
            ...formState,
            [name]:value//Propiedades computadas lo que este
            //se añade a lo que este en el main lo que esta en el value
        })
    }

    useEffect(() => {
      console.log('useEffect called!')
    },[]);

    useEffect(() => {
        console.log('email changed!')
      },[email]);
    
  return (
    <>
        <h1>Simple Form</h1>
        <hr/>

        <input 
            type="text"
            className='form-control'
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}/>

        <input 
            type="email"
            className='form-control mt-2'
            placeholder="user@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}/>

        {
            username === 'Alejandro' && (<Message/>)
        }
        
    </>
  )
}
