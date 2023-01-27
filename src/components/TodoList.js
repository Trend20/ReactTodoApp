import React, { useState } from "react";
import Search from "./Search";
import TodoItems from "./TodoItems";

const TodoList = (props) =>{

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // handleOnchange event
  const handleTodoInput = (event) =>{
    setTodo(event.target.value)
  }

  // handle form submission
  const handleFormSubmission = (event) =>{
    event.preventDefault();

    if(todo !== ""){
      const newTodos = [...todos, todo];
      setTodos(newTodos);

      setTodo("");
    }
    else{
      setTodo("")
    }
  }

  const deleteTodo = (index) =>{
    const remainingTodo = [...todos];
    remainingTodo.splice(index, 1);
    setTodos(remainingTodo);
 }

  return(
    <div className="todo-container">
      <h1>React Todo App</h1>
      <form onSubmit={handleFormSubmission}>
        <input type="text" 
        value={todo}
        onChange={handleTodoInput}
        placeholder="Enter Todo...."
        />
        <button type="submit">Add Todo</button>
      </form>
      <Search todos={todos} />
      <TodoItems todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}
export default TodoList;