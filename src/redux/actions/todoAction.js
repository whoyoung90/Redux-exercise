import { createActions, handleActions } from "redux-actions";

/**
 * @description createActions
 * @param { action type, payload creator function }
 * Action Creator를 생성하는 함수
 */
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

/**
 * @description handleActions
 * @param { action type, reducer funtion, initialState }
 * Action에 대한 Reducer를 생성하는 함수
 */
const initialState = [];
const todoReducer = handleActions(
  {
    ADD_TODO: (state, action) => {
      return state.concat(action.payload.text);
    },
    REMOVE_TODO: (state, action) => {
      return state.slice(0, -1);
    },
    REMOVE_ALL: (state, action) => {
      return [];
    },
  },
  initialState
);
export default todoReducer;
