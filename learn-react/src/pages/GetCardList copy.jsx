import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container
} from "reactstrap";

export default class GetCardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost")
      .then(response => {
        console.log("response", response);
        const data = response.data;
        this.setState({ data });
      });
  }

  render() {
    console.log(this.state.data);
    const { data } = this.state;
    return (
      <div>
        <h1>Card list</h1>
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
              style={{ width: "200px", justifyContent: "center" }}
            >
              <CardImg
                top
                src={item.avatar}
                alt="Card image cap"
                style={{ width: "100px" }}
              />
              <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardSubtitle>{item.id}</CardSubtitle>
                <Button>Button</Button>
              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}
