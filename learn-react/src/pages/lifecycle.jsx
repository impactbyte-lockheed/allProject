import React, { Component } from "react";
// import axios from "axios";
export default class lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));
    // axios.get("https://pokeapi.co/api/v2/pokemon/ditto/").then(res => {
    //   const data = res.data;
    //   this.setState({ data });
    // });
  }

  render() {
    console.log("state", this.state);
    // const { data } = this.state;
    return (
      <div>
        <h1>poke api</h1>
      </div>
    );
  }
}
