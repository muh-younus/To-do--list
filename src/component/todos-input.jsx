import react, { useState } from "react";



function Input(props){

    const [inputTask,setinputTask] = useState("");

  return(
      <>

          <div className="input-section">

      <input type="text" placeholder="Enter Your Task"  value={inputTask} className ="input-field" 
          onChange = { e => {
                setinputTask(e.target.value);
              
            }}/>
           
              
      <button className = 'add-btn' type='button'
         onClick = {()=>{
             props.addList(inputTask)
             setinputTask("");
         }} 
          >Add</button>

                
    
          </div>
     </>


    
  )
}

export default Input;