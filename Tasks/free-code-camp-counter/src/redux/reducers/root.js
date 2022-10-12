import { combineReducers } from "redux";
import counterReducer from "./counter";

const rootReducers = combineReducers({counterReducer})

export default rootReducers;