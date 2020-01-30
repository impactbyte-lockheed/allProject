// import { createStore } from "redux";
// import combineReducers from "./reducers";

// export default createStore(combineReducers);

import { createStore } from "redux";
import counter from "./reducers/counter";

export default createStore(counter);
