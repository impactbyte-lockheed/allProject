import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import ClassComponent from "./pages/ClassComponent";
import Home from "./pages/Home";
import FunctionComponent from "./pages/FunctionComponent";
import TodoList from "./pages/TodoList";
import TodoListFormik from "./pages/TodoListFormik";
import ReactHooksForm from "./pages/ReactHooksForm";
import SignIn from "./pages/SignIn";
import Lifecycle from "./pages/lifecycle";
import TodoListHooks from "./pages/TodoListHooks";
import ExampleLifeCycle from "./pages/ExampleLifeCycle";
import GetCardList from "./pages/GetCardList";

import "./styles/index.css";

function App() {
  const isLogin = JSON.parse(localStorage.getItem("status"));

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/examplelifecycle">
          <ExampleLifeCycle />
        </Route>
        <Route path="/getcardlist">
          <GetCardList />
        </Route>
        <Route path="/todolisthooks">
          <TodoListHooks />
        </Route>
        <Route path="/lifecycle">
          <Lifecycle />
        </Route>
        <Route path="/class">
          <ClassComponent />
        </Route>
        <Route path="/function">
          <FunctionComponent />
        </Route>
        <Route path="/todoformik">
          <TodoListFormik />
        </Route>
        <Route path="/hookform">
          <ReactHooksForm />
        </Route>
        <Route path="/todolist">
          {isLogin && isLogin !== null ? (
            <TodoList />
          ) : (
            <Redirect to="/signin" />
          )}
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
