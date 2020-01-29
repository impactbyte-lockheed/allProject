import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  Container,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

export default function GetCardList() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [inputModal, setInputModal] = useState("");
  const [modal, setModal] = useState(false);
  const [idUser, setIdUser] = useState();

  const toggle = id => {
    setModal(!modal);
    setIdUser(id);
  };

  useEffect(() => {
    ambilData();
  }, []);

  // axios
  // const ambilData = () => {
  //   axios
  //     .get("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost")
  //     .then(response => {
  //       if (response.status === 200) {
  //         const data = response.data;
  //         setData(data);
  //       }
  //     });
  // };

  //asynchronus
  const ambilData = async () => {
    const response = await axios.get(
      "https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost"
    );
    const data = await response.data;
    setData(data);
    console.log("async", data);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await axios.post("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost", {
      name: input
    });
    await setInput("");
    await ambilData();
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleChangeModal = e => {
    setInputModal(e.target.value);
  };

  const handleEdit = async () => {
    // console.log("masuk");
    console.log("id", idUser);
    // const newName = prompt(`edit nama ${name}`);
    console.log("input modal", inputModal);
    const id = idUser;
    await axios.put(
      `https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${id}`,
      {
        name: inputModal
      }
    );
    // console.log("put", put);
    toggle();
    await ambilData();
  };

  const handleDelete = async id => {
    console.log("id", id);
    await axios.delete(
      `https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${id}`
    );
    await ambilData();
  };
  console.log(data);

  return (
    <div>
      <h1>CARD LIST HOOKS</h1>
      {/* <p>{data}</p> */}
      <div style={{ display: "flex" }}>
        {/* <form onSubmit={handleSubmit}>
          <input
            placeholder="input disini"
            onChange={handleChange}
            value={input}
          />
          <button>Add</button>
        </form> */}

        <form onSubmit={handleSubmit}>
          <input
            placeholder="placeholder input todo"
            onChange={handleChange}
            value={input}
            name="todo"
          />
          <button>Submit</button>
        </form>
      </div>

      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Card
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
                  <Button onClick={() => toggle(item.id)}>Edit</Button>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    style={{ background: "red" }}
                  >
                    Delete
                  </Button>
                </CardBody>
              </Card>
            </React.Fragment>
          );
        })}
      </Container>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Edit sesuatu</ModalHeader>
        <ModalBody>
          <input
            placeholder="edit disini"
            onChange={handleChangeModal}
            value={inputModal}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleEdit()}>
            Edit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* <Button color="danger" onClick={toggle}>
        Edit
      </Button> */}
    </div>
  );
}
