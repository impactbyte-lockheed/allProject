import { combineReducers } from "redux";
import counter from "./counter";
import square from "./square.reducers";

export default combineReducers({
  counter: counter,
  square: square
});
