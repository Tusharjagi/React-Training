import countReducer from "./CountReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({countReducer});

export default reducers;