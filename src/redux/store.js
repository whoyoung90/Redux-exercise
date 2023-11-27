import { createStore } from "redux";
import rootReducer from "./reducers";

// 현재 redux-Toolkit을 사용하는것이 표준 (createStore는 deprecated..)
const store = createStore(rootReducer);

export default store;
