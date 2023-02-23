import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHooks = () => {
    const [counter, setcounter] = useState( 10 )

    const increment = useCallback(
      (value) => {
        setcounter((c) => c + value);
      },
      [],
    )
    

    // const increment = () => {
    //     setcounter(counter + 1);
    // }
  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />

        <ShowIncrement increment={increment}/>

    </>
  )
}
