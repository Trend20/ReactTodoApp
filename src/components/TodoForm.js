import React, { useState } from "react";
import TodoItems from "./TodoItems";

const TodoForm = (props) =>{

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // handleOnchange event
  const handleTodoInput = (event) =>{
    setTodo(event.target.value)
  }


  // handle form submission
  const handleFormSubmission = (event) =>{
    event.preventDefault();

    const newTodos = [...todos, todo];
    setTodos(newTodos);

    setTodo("");
    // setTodos([]);
  }

  return(
    <div>
      <h1>React Todo App</h1>
      <form onSubmit={handleFormSubmission}>
        <input type="text" 
        value={todo}
        onChange={handleTodoInput}
        placeholder="Enter Todo...."
        />
        <button type="submit">Add Todo</button>
      </form>
      <TodoItems todos={todos} />
    </div>
  )
}
export default TodoForm;