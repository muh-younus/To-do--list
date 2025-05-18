import React, {useState} from "react";


function TodoItems(props){

  return(

    <>
    <li className ="list-item">
      {props.task}
      <span className = "icon"><i className="fa-solid fa-trash icon-delete" 
    onClick={()=>{

      props.delete(props.index)
      }}></i></span>
    </li>
    </>
  )
}

export default TodoItems;