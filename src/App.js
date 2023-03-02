import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const todoSubmitHandler = (e) => {
    const newTodo = {
      title,
    };
    e.preventDefault();
    setTodoList([...todoList, newTodo]);
    setTitle("");
  };

  return (
    <div>
      <form className="form" onSubmit={todoSubmitHandler}>
        <input type="text" value={title} onChange={titleChangeHandler} />
        <input type="submit" value="추가하기"/>
      </form>
      <header>
        <h1>Todo List</h1>
      </header>
      <main className="todo-list">
        {todoList.map((item) => {
          return (
            <div className="todo-box">
              <p>{item.title}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
