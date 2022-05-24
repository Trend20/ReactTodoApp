import React, { useState } from "react";


const TodoItems = (props) =>{

  const {todos} = props;

  const deleteTodo = (todo) =>{
    
  }
    return(
      <div>
        <ul>
        {
          todos.map((item, index) =>(
              <li key={index}>{item}</li>
          ))
        }
        </ul>
      </div>
    )
}

export default TodoItems;