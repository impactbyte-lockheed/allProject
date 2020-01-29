import React, { useState } from "react";

export default function TodoListHooks() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTodo("");
  };

  const handleDelete = index => {
    todos.splice(index, 1);

    setTodos([...todos]);
    console.log(todos);
  };

  const handleEdit = index => {
    const newTodo = prompt("Edit todo");
    todos.splice(index, 1, newTodo);
    setTodos([...todos]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="placeholder input todo"
          onChange={handleChange}
          value={todo}
          name="todo"
        />
        <button>Submit</button>
      </form>
      <div>
        {todos.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              width: "200px",
              justifyContent: "space-between"
            }}
          >
            <li>{item}</li>
            <span onClick={() => handleEdit(index, item)}>edit</span>
            <span onClick={() => handleDelete(index, item)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
}
