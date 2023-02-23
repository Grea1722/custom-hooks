import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { CallbackHooks } from './06-memos/CallbackHooks'
// import { Padre } from './07-tarea-memo/Padre'
// import { FormCustomHook } from './02-useEffect/FormCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp'
import "./index.css";
// import './08-Reducer/intro-reducer';
// import { ToDoApp } from './08-Reducer/ToDoApp'
import { MainApp } from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
