import React, { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
      todos: []
    };
  }

  handleChange = event => {
    // console.log("masuk", event.target.value);
    // this.state.todo("ASD");
    this.setState({ todo: event.target.value });
  };

  // handleChange = event => {
  //   console.log("masuk", event.target.value);
  //   // this.state.todo("ASD");
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  handleSubmit = e => {
    console.log("masuk");
    e.preventDefault();
    const { todo, todos } = this.state;
    console.log("todo doang", todos);
    console.log("todo spread", ...todos);
    const newTodos = [...todos, todo];
    console.log(this.state);
    this.setState({
      todo: "",
      todos: newTodos
    });
    console.log("todo stelah state", todos);
    console.log("todo setelah state spread", ...todos);
  };

  handleDelete = index => {
    // console.log("masuk", e);
    console.log("masuk", index);
    let { todos } = this.state;
    todos.splice(index, 1);
    this.setState({ todos: todos });
  };

  handleEdit = (index, item) => {
    const { todos } = this.state;
    const newTodo = prompt(`apakah anda yakin mengedit edit ${item}`);
    todos.splice(index, 1, newTodo);
    this.setState({ todos: todos });
  };

  render() {
    console.log("state", this.state);

    // const { todo, todos, nama } = this.state;
    const { todo, todos } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="placeholder input todo"
            onChange={this.handleChange}
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
              <span onClick={() => this.handleEdit(index, item)}>edit</span>
              <span onClick={() => this.handleDelete(index, item)}>X</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
