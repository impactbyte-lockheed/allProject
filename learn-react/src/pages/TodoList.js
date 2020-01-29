import React, { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    console.log(todos);
    setTodo("");
  };

  const handleDelete = index => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const handleEdit = index => {
    const newTodo = prompt("edit todo");
    todos.splice(index, 1, newTodo);
    setTodos([...todos]);
  };

  return (
    <div>
      <h1>Todolist hooks</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="input"
          name="todo"
          onChange={handleChange}
          value={todo}
        />
        <button>Submit</button>
      </form>
      <div>
        {todos.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <span onClick={() => handleDelete(index)}>X</span>
            <span onClick={() => handleEdit(index)}>Edit</span>
          </div>
        ))}
      </div>
    </div>
  );
}
