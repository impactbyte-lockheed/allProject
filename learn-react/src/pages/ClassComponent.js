import React, { Component } from "react";
import FunctionComponent from "./FunctionComponent";
import Button from "../components/Button";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Miftah",
            age: 20,
            city: "Jakarta",
            number: 0,
            datas: ["Miftah", "Faris", "Thoriq", "Faizal"]
        };
        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({ name: "Thoriq" });
    }

    addAge = () => {
        const age = this.state.age;

        this.setState({ age: age + 1 });
    };

    minusAge = () => {
        const age = this.state.age;

        this.setState({ age: age - 1 });
    };

    clickMe = () => {
        const number = prompt("number");

        this.setState(prevState => ({ number: prevState.number + number }));
    };

    checkKey = index => {
        console.log(index);
    };

    render() {
        const name = this.state.name;
        const age = this.state.age;
        const isLogin = true;

        return (
            <div>
                <h1>Class Component</h1>

                <h6>
                    Hello My name is {name}, i live in {this.state.city}, i am{" "}
                    {age} years old
                </h6>

                <div>
                    <Button changeName={this.changeName}>Change Name</Button>
                </div>
                <div>
                    <Button addAge={this.addAge}>+</Button>
                </div>
                <div>
                    <Button minusAge={this.minusAge}>-</Button>
                </div>
                <div>
                    <button onClick={this.clickMe}>Click</button>
                </div>
                <FunctionComponent
                    age={this.state.age}
                    addAge={this.addAge}
                    name={"Thoriq"}
                />
                <FunctionComponent age={11} />
                {this.state.datas.map((element, index) => {
                    return (
                        <p key={index} onClick={() => this.checkKey(index)}>
                            {element}
                        </p>
                    );
                })}
                {isLogin && this.state.datas.length > 5 ? (
                    <Button>Logout</Button>
                ) : (
                    <Button>Login</Button>
                )}
            </div>
        );
    }
}

export default ClassComponent;
