import { useState } from "react";

function TodoApp(props) {
  /**
   * 🚩 props를 통해 가져올 수 있는 이유는
   * TodoApp을 Redux에 connect 시켰으므로 (TodoAppContainer)
   */
  const {
    // Redux state
    todoItems,
    // Redux dispatch
    addTodo,
    removeTodo,
    removeAll,
  } = props;

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
            addTodo(newTodo);
            setNewTodo("");
          }}
        >
          할 일 추가
        </button>
        <button onClick={removeTodo}>할 일 삭제</button>
        <button onClick={removeAll}>모두 삭제</button>
      </div>
    </div>
  );
}

export default TodoApp;
