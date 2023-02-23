import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm);

    // {
    //     username: '',
    //     email: '',
    //     password:''
    // }

    const onInputChange = ({target}) => {
        //desestructuracion name y value de target
        const {name,value}=target;
        setformState({
            ...formState,
            [name]:value//Propiedades computadas lo que este
            //se añade a lo que este en el main lo que esta en el value
        })
    }

    const onResetForm = () => {
        setformState(initialForm)
    }

    return {
        ...formState,//para poder sacar los campos desde el useForm
        formState,
        onInputChange,
        onResetForm
    }
}
