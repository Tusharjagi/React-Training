import { createStore } from "redux";
import rootReducers from "./reducers/root";

const store = createStore(rootReducers);

export default store;