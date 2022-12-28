import React from "react";
import TodoItem from "./TodoItem";

export default function Todolist(props) {
  return (
    <ul class="list-group py-2 px-5 border-0 m-0">
      {props.todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          checkToggle={props.checkToggle}
          deleteTodo={props.deleteTodo}
          updateTodo={props.updateTodo}
          editChange={props.editChange}
        />
      ))}
    </ul>
  );
}
