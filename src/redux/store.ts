// import { createStore, applyMiddleware, compose } from "redux";
// import asyncThunkMiddleware from "./middlewares/asyncThunkMiddleware";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(asyncThunkMiddleware))
// );

// redux-thunk가 내장되어 있으며, redux-devtools가 자동으로 연동됨
const store = configureStore({ reducer: rootReducer });

export default store;
