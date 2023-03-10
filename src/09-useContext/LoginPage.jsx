import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>Login Page</h1>
      <hr />

      <button className="btn btn-primary"
      onClick={() => setUser({id:123, name:'Alejandro'})}>Establecer Usuario</button>
      <pre>
        {JSON.stringify(user,null,3)}
      </pre>
    </>
  );
};
