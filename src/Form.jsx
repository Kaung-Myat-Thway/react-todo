import React from "react";

export default function Form(props) {
  return (
    <form action="#" className="py-4 px-5" onSubmit={props.addTodo}>
      <input
        className="form-control border-success"
        placeholder="Todo item..."
        type="text"
        onChange={props.changeInput}
        value={props.todoInput}
      />
    </form>
  );
}
