// import { createStore } from "redux";
// import combineReducers from "./reducers";

// export default createStore(combineReducers);

import { createStore } from "redux";
// import counter from "./reducers/counter";
import squareReducers from "./reducers/square.reducers";

export default createStore(squareReducers);
