import { createActions, handleActions } from "redux-actions";

// Action Creator를 생성하는 함수
export const { addTodo, removeTodo, removeAll } = createActions({
  ADD_TODO: (text) => {
    return { text };
  },
  REMOVE_TODO: () => {
    return {};
  },
  REMOVE_ALL: () => {
    return {};
  },
});

// Action에 대한 Reducer를 생성하는 함수
const initialState = [];
const todoReducer = handleActions(
  {
    [addTodo]: (state, action) => {
      return state.concat(action.payload.text);
    },
    [removeTodo]: (state, action) => {
      return state.slice(0, -1);
    },
    [removeAll]: (state, action) => {
      return [];
    },
  },
  initialState
);
export default todoReducer;
