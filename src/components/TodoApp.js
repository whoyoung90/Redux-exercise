import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from "../redux/slices/todoSlice";

function TodoApp(props) {
  // /**
  //  * 🚩 props를 통해 가져올 수 있는 이유는
  //  * TodoApp을 Redux에 connect 시켰으므로 (TodoAppContainer)
  //  */
  // const {
  //   // Redux state
  //   todoItems,
  //   // Redux dispatch
  //   addTodo,
  //   removeTodo,
  //   removeAll,
  //   triggerAsyncFunction,
  // } = props;

  const todoItems = useSelector((state) => [...state.todo]);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h3>오늘 할 일</h3>
      <ul>
        {todoItems.map((todoItem, index) => {
          return <li key={index}>{todoItem}</li>;
        })}
      </ul>

      <div>
        <input
          value={newTodo}
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
        />
        <button
          onClick={() => {
            // addTodo(newTodo);
            dispatch(addTodoActionCreator(newTodo));
            setNewTodo("");
          }}
        >
          할 일 추가
        </button>
        {/* <button onClick={removeTodo}> */}
        <button onClick={() => dispatch(removeTodoActionCreator())}>
          할 일 삭제
        </button>
        {/* <button onClick={removeAll}> */}
        <button onClick={() => dispatch(removeAllActionCreator())}>
          모두 삭제
        </button>

        <button
          onClick={() => {
            // 이제 asyncFunctionMiddleware가 아닌 dispatch 함수를 사용해서 "thunk를 직접 만들고" dispatch
            dispatch((dispatch, getState) => {
              console.log("비동기 함수 실행", getState());

              new Promise((resolve, reject) => {
                setTimeout(resolve, 3000);
              })
                .then(() => {
                  console.log("비동기 함수 성공", getState());
                })
                .finally(() => {
                  console.log("비동기 함수 종료", getState());
                });
            });
          }}
        >
          비동기 함수 테스트
        </button>
      </div>
    </div>
  );
}

export default TodoApp;
