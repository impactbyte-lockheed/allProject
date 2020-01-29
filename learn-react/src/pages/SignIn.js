import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLogin: false
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.history.push("/todolist");

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("status", true);
    };

    render() {
        console.log(this.props);

        const { email, password } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <div className="signin-form">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">
                                Email
                            </Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="something@idk.cool"
                                onChange={this.handleChange}
                                value={email}
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">
                                Password
                            </Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="don't tell!"
                                onChange={this.handleChange}
                                value={password}
                            />
                        </FormGroup>
                        <br />
                        <Button>Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignIn);
