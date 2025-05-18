
import Input from "./component/todos-input"

import { useState } from "react"
import TodoList from "./component/todo-list";
import './App.css'



export default function App(){ 

const [listTodo, setlistTodo] = useState([]);

  let addList = (inputTask) =>{

    setlistTodo([...listTodo,inputTask]);
  }

  let deleteList = (k) =>{

    let newlistTodo = [...listTodo];
    newlistTodo.splice(k,1);
    setlistTodo([...newlistTodo]);
  }
  return (
    <>

      <div className='parent'>

        <div className='child-1'>

          <Input addList = {addList}/>

          {
            listTodo.map((TodoItems,i)=> {

              return(

    <TodoList key = {i} index={i} task = {TodoItems} delete={deleteList}/>
                )
              
            })
          }

          
        </div>
      
      </div>

      
    </>
  )
}

