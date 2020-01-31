import React from "react";
import { connect } from "react-redux";
import {
  addCount,
  minusCount,
  hitungLuas,
  hitungKeliling
} from "../actions/square.actions";

function Square(props) {
  console.log(props);
  return (
    <div>
      <h1>Square redux</h1>
      <h2>Sisi: {props.sisi}</h2>
      <button
        onClick={() => {
          props.addCount();
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          props.minusCount();
        }}
      >
        minus
      </button>
      <h2>Luas: {props.luas}</h2>
      <h2>Keliling: {props.keliling}</h2>
      <button
        onClick={() => {
          props.hitungLuas();
        }}
      >
        hitung luas
      </button>
      <button
        onClick={() => {
          props.hitungKeliling();
        }}
      >
        hitung keliling
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    sisi: state.sisi,
    luas: state.luas,
    keliling: state.keliling
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCount: () => dispatch(addCount()),
    minusCount: () => dispatch(minusCount()),
    hitungLuas: () => dispatch(hitungLuas()),
    hitungKeliling: () => dispatch(hitungKeliling())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
