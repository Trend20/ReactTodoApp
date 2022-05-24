import React from "react";


const TodoItems = (props) =>{

  const {todos, deleteTodo} = props;
    return(
      <div>
        <ul>
        {
          todos.map((item, index) =>(
              <div key={index}>
                <li>{item}</li>
                <span onClick={deleteTodo}>X</span>
              </div>
          ))
        }
        </ul>
      </div>
    )
}

export default TodoItems;