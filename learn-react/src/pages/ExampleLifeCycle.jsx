import React, { Component } from "react";
import axios from "axios";

export default class ExampleLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      data: [],
      title: ""
    };
  }
  //https://pokeapi.co/api/v2/pokemon/ditto/

  componentDidMount() {
    console.log("didmount");
    // fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(response => {
      console.log("response", response);
      const data = response.data;
      this.setState({ data });
    });
  }

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // axios
    //   .post("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost", {
    //     name: this.state.title
    //   })
    //   .then(response => {
    //     console.log(response);
    //   });
    await axios.post("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost", {
      name: this.state.title
    });

    // console.log(post);
  };

  render() {
    // console.log("render");
    console.log("state", this.state);
    // const { height, id, name, sprites } = this.state.data;
    const { title } = this.state;
    // console.log(sprites, "gambar");

    return (
      <div>
        <h1>Life cycles</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={title} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        {/* <img src={sprites !== undefined && sprites.front_default} alt={name} /> */}
      </div>
    );
  }
}
