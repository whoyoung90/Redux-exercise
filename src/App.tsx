import TodoApp from "./components/TodoApp";
// import TodoAppContainer from "./redux/containers/TodoAppContainer";

/**
 * @description TodoAppContainer 필요없는 이유
 * TodoApp 컴포넌트를 useSelector, useDispatch hook을 사용하도록 변경했기 때문에 더이상 "컨테이너(connect)"를 사용할 필요가 없다.
 */
function App() {
  return <TodoApp />;
}

export default App;
