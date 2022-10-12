import { createStore } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import reducers from "./Reducers";

const store = () => createStore({
    reducers
})

export default store;
