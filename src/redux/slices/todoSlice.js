import { createSlice, current } from "@reduxjs/toolkit";

/**
 * Redux-Toolkit에서는 내부적으로 Immer를 사용하므로
 * 항상 새로운 state를 만들어서 리턴할 필요없이, drafted state를 지유롭게 수정하면 된다
 */
const initialState = [];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload); // 기존 state 배열에 새로운 데이터를 바로 push 가능!
    },
    removeTodo: (state, action) => {
      console.log(state, current(state));
      return state.slice(0, -1);
    },
    removeAll: (state, action) => {
      return initialState;
    },
  },
});

export const { addTodo, removeTodo, removeAll } = todoSlice.actions;
export default todoSlice.reducer;
