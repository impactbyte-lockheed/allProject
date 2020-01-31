import {
  INCREMENT,
  DECREMENT,
  LUAS,
  KELILING
} from "../actions/square.actions";

const initialState = {
  sisi: 0,
  luas: 0,
  keliling: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        sisi: state.sisi + 1,
        luas: state.luas,
        keliling: state.keliling
      };
    case DECREMENT:
      return {
        sisi: state.sisi - 1,
        luas: state.luas,
        keliling: state.keliling
      };
    case LUAS:
      return {
        sisi: state.sisi,
        luas: state.sisi * state.sisi,
        keliling: state.keliling
      };
    case KELILING:
      return {
        sisi: state.sisi,
        luas: state.luas,
        keliling: state.sisi * 4
      };
    default:
      return state;
  }
};
