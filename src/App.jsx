import { useState, useEffect } from "react";
import "./App.css";
import Todolist from "./Todolist";
import Form from "./Form";
import Checklist from "./Checklist";

function App() {
  //localstorage
  function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  }

  const [todos, setTodos] = useLocalStorage("todos", []);
  const [todoInput, setTodoinput] = useState();
  const [todoId, setTodoId] = useState(1);
  const [check, setCheck] = useState(true);

  function addTodo(event) {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: todoId,
        title: todoInput,
        isCompleted: false,
      },
    ]);

    setTodoinput("");
    setTodoId((prevTodoId) => prevTodoId + 1);
  }

  function changeInput(event) {
    setTodoinput(event.target.value);
  }

  function deleteTodo(id) {
    if (window.confirm("Are You Sure You Want To Delete?")) {
      setTodos([...todos.filter((todo) => todo.id !== id)]);
    }
  }

  function checkToggle(id) {
    setCheck(true);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  }

  function editchange(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isEdited = !todo.isEdited;
        }
        return todo;
      })
    );
  }

  function updateTodo(event, id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          if (event.target.value.trim().length === 0) {
            todo.isEdited = false;
            return todo;
          }
          todo.title = event.target.value;
        }
        todo.isEdited = false;
        return todo;
      })
    );
  }

  function remainingItem() {
    return todos.filter((todo) => !todo.isCompleted).length;
  }

  function clearComplete() {
    setTodos([...todos].filter((todo) => !todo.isCompleted));
  }

  function checkAll() {
    setTodos(
      todos.map((todo) => {
        todo.isCompleted = true;

        return todo;
      })
    );
    setCheck(false);
  }

  function uncheckAll() {
    setTodos(
      todos.map((todo) => {
        todo.isCompleted = false;

        return todo;
      })
    );
    setCheck(true);
  }

  return (
    <div className="App">
      <div class="container">
        <h1 class="py-3 my-3 text-primary fw-bold">REACT TODO</h1>
        <div class="card w-50 m-auto border-success shadow p-3 mb-5 bg-body-tertiary rounded" >
        <Form
          changeInput={changeInput}
          todoInput={todoInput}
          addTodo={addTodo}
        />
         <Todolist
        addTodo={addTodo}
        todos={todos}
        checkToggle={checkToggle}
        editchange={editchange}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
      <Checklist
        remainingItem={remainingItem}
        clearComplete={clearComplete}
        check={check}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      </div>
        </div>
    </div>
  );
}

export default App;
