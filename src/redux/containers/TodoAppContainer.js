import { connect } from "react-redux";
// import {
//   addTodoActionCreator,
//   removeTodoActionCreator,
//   removeAllActionCreator,
// } from "../ducks/todoDuck";
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from "../actions/todoAction";

import TodoApp from "../../components/TodoApp";

function mapStateToProps(state, ownProps) {
  return {
    todoItems: state.todo,
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => {
      dispatch(addTodoActionCreator(text));
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAll: () => {
      dispatch(removeAllActionCreator());
    },
    triggerAsyncFunction: (asyncFunction) => {
      dispatch(asyncFunction);
    },
  };
}

/**
 * 🚩 mapStateToProps, mapDispatchToProps의 역할
 * state와 dispatch를 타겟 컴포넌트의 props로 매핑시켜준다
 */
const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
