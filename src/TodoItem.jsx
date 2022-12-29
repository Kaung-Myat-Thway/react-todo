import React from 'react'

export default function TodoItem(props) {
  return (
    <li className="list-group-item my-3 border">
            <input
              className="form-check-input float-start"
              type="checkbox"
              onChange={() => props.checkToggle(props.todo.id)}
              checked={props.todo.isCompleted ? true : false}
            />
            {!props.todo.isEdited ? (
              <span
                onDoubleClick={() => props.editChange(props.todo.id)}
                className={props.todo.isCompleted ? "line" : ""}
              >
                {props.todo.title}
              </span>
            ) : (
              <input
                type="text"
                autoFocus
                onBlur={(event) => props.updateTodo(event, props.todo.id)}
                defaultValue={props.todo.title}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    props.updateTodo(event, props.todo.id);
                  } else if (event.key === "Escape") {
                    props.editchange(props.todo.id);
                  }
                }}
              />
            )}

            <button onClick={() => props.deleteTodo(props.todo.id)} className="float-end btn btn-danger">
              Delete
            </button>
          </li>
  )
}
