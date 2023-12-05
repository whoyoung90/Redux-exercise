// import { createStore, applyMiddleware, compose } from "redux";
// import asyncFunctionMiddleware from "./middlewares/asyncFunctionMiddleware";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(asyncFunctionMiddleware))
// );
const store = configureStore({ reducer: rootReducer });

export default store;
