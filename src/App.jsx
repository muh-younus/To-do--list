
import Input from "./component/todos-input"

import { useState } from "react"
import TodoList from "./component/todo-list";
import './App.css'



export default function App(){ 

const [listTodo, setlistTodo] = useState([]);

  let addList = (inputTask) =>{

    setlistTodo([...listTodo,inputTask]);
  }
  return (
    <>

      <div className='parent'>

        <div className='child-1'>

          <Input addList = {addList}/>
        <TodoList addList = {addList}/>

          
        </div>
      
      </div>

      <h1>this a</h1>
    </>
  )
}

