import { combineReducers } from "redux";
// import todoReducer from "../ducks/todoDuck";
// import todoReducer from "../actions/todoAction";
import todoReducer from "../slices/todoSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
