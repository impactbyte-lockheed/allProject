import React from "react";
import { connect } from "react-redux";
import { addCount, minusCount, INCREMENT, DECREMENT } from "../actions/counter";

function Counter(props) {
  console.log(props);
  return (
    <div>
      <h1>Counter: {props.counter}</h1>
      <button onClick={() => props.dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => props.dispatch({ type: DECREMENT })}>-</button>
      <button
        onClick={() => {
          props.addCount();
        }}
      >
        + funtion
      </button>
      <button
        onClick={() => {
          props.minusCount();
        }}
      >
        - funtion
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCount: () => dispatch(addCount()),
    minusCount: () => dispatch(minusCount()),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
