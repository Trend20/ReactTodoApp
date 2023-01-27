import React from "react";


const TodoItems = (props) =>{
  const {todos, deleteTodo} = props
    return(
      <div className="todo-list">
        <ul>
        {
          todos.map((item, index) =>(
              <div key={index}>
                <li>{item}</li>
                <div onClick={deleteTodo}>X</div>
              </div>
          ))
        }
        </ul>
      </div>
    )
}

export default TodoItems;