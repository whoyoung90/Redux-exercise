import { createSlice, current } from "@reduxjs/toolkit";

/**
 * Redux-Toolkit에서는 내부적으로 Immer를 사용하므로
 * 항상 새로운 state를 만들어서 리턴할 필요없이, draft state를 지유롭게 수정하면 된다
 */
const initialState: string[] = [];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // 기존 state의 값을 직접 수정
      state.push(action.payload);
    },
    removeTodo: (state) => {
      console.log(state, current(state));
      // 새로운 state를 리턴하여 기존 state를 교체
      return state.slice(0, -1);
    },
    removeAll: () => {
      // 새로운 state를 리턴하여 기존 state를 교체
      return initialState;
    },
  },
});

export const { addTodo, removeTodo, removeAll } = todoSlice.actions;
export default todoSlice.reducer;
