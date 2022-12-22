// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productSaga from "./productSaga";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);
export default store;
