import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
// import App from "./App";
// import TodoApp from "./components/TodoApp";
import TodoAppContainer from "./redux/containers/TodoAppContainer";

/**
 * redux에 연결된 "컨테이너"가 아닌 그냥 react 컴포넌트를 사용하면서
 * props를 통해 Redux state와 dispatch 함수에 접근하려고 하면 undefined 초기 에러!!
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoAppContainer />
    </Provider>
  </React.StrictMode>
);
