import React, { Component } from "react";
import axios from "axios";

import {
  Card,
  CardImg,
  Container,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default class GetCardList extends Component {
  // Constuctor
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      input: "",
      notFound: ""
    };
  }

  // did mount
  componentDidMount() {
    this.ambilData();
  }

  // untuk ambil data di didmount, refresh data setelah add, update dan delete
  ambilData = () => {
    axios
      .get("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost")
      .then(response => {
        console.log("response", response);
        if (response.status === 200) {
          const data = response.data;
          this.setState({ data, notFound: "data ada" });
        }

        // else {
        //   console.log("ga ada");
        //   // this.setState({ notFound: "DATA TIDAK ADA" });
        // }
      });
  };

  // handle change form input
  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  // untuk submit add
  handleSubmit = async e => {
    e.preventDefault();

    await axios.post("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost", {
      name: this.state.input
    });
    this.setState({ input: "" });
    // diambil dari function get data
    await this.ambilData();
    // const response = await axios.get(
    //   "https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost"
    // );
    // const data = await response.data;
    // return this.setState({ data });
  };

  // untuk delete nerima idnya dari onclick
  handleDelete = async id => {
    console.log("id", id);
    await axios.delete(
      `https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${id}`
    );
    await this.ambilData();
  };

  // handle edit
  handleEdit = async (id, name) => {
    const newName = prompt(`edit nama ${name}`);
    await axios.put(
      `https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${id}`,
      {
        name: newName
      }
    );
    await this.ambilData();
  };

  render() {
    console.log("state", this.state);
    const { data, input, notFound } = this.state;
    return (
      <div>
        <h1>CARD LIST GET</h1>
        {notFound}
        <div style={{ display: "flex" }}>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="input disini"
              onChange={this.handleChange}
              value={input}
            />
            <button>Add</button>
          </form>
        </div>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {data.map((item, index) => (
            <Card
              key={index}
              style={{
                width: "200px",
                alignItems: "center"
              }}
            >
              <CardImg
                top
                style={{ width: "100px" }}
                src={item.avatar}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardSubtitle>{item.id}</CardSubtitle>
                <Button onClick={() => this.handleEdit(item.id, item.name)}>
                  Edit
                </Button>
                <Button
                  onClick={() => this.handleDelete(item.id)}
                  style={{ background: "red" }}
                >
                  Delete
                </Button>
              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}
