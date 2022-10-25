import { createStore } from "redux";
import rootReducers from "./reducer/rootReducer";

const store = createStore(rootReducers);

export default store;