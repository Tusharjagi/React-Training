import { combineReducers } from "redux";
import countReducers from "./count"

const root = combineReducers({countReducers});

export default root;