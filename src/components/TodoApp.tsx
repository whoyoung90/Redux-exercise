import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from "../redux/slices/todoSlice";

function TodoApp() {
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

  const todoItems = useSelector(({ todo }) => todo);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h3>오늘 할 일</h3>
      <ul>
        {todoItems.map((todoItem: string, idx: number) => {
          return <li key={idx}>{todoItem}</li>;
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
            dispatch(addTodoActionCreator(newTodo));
            setNewTodo("");
          }}
        >
          할 일 추가
        </button>
        <button onClick={() => dispatch(removeTodoActionCreator())}>
          할 일 삭제
        </button>
        <button onClick={() => dispatch(removeAllActionCreator())}>
          모두 삭제
        </button>

        {/* <button
          onClick={() => {
            // action이 함수: async
            // 기존 asyncThunkMiddleware -> dispatch 함수를 사용해서 "thunk를 직접 만들고" dispatch
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
        </button> */}
      </div>
    </div>
  );
}

export default TodoApp;
