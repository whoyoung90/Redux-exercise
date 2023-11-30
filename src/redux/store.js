import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import asyncFunctionMiddleware from "./middlewares/asyncFunctionMiddleware";

// compose: 여러개의 함수를 합치기 위해 사용하는 함수
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 현재 redux-Toolkit을 사용하는것이 표준 (createStore는 deprecated..)
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(asyncFunctionMiddleware))
);

export default store;
