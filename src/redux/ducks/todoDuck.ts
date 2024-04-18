type AddTodoAction = {
  type: typeof ACTION_TYPE_ADD_TODO;
  text: string;
};
type RemoveTodoAction = {
  type: typeof ACTION_TYPE_REMOVE_TODO;
};
type RemoveAllAction = {
  type: typeof ACTION_TYPE_REMOVE_ALL;
};
type CounterAction = AddTodoAction | RemoveTodoAction | RemoveAllAction;

// Actions (Action Types)
const ACTION_TYPE_ADD_TODO = "my-app/todo/ADD_TODO";
const ACTION_TYPE_REMOVE_TODO = "my-app/todo/REMOVE_TODO";
const ACTION_TYPE_REMOVE_ALL = "my-app/todo/REMOVE_ALL";

// Reducer
const initialState: string[] = [];
export default function todoReducer(
  state = initialState,
  action: CounterAction
) {
  switch (action.type) {
    case ACTION_TYPE_ADD_TODO:
      return state.concat(action.text);
    case ACTION_TYPE_REMOVE_TODO:
      return state.slice(0, -1);
    case ACTION_TYPE_REMOVE_ALL:
      return [];
    default:
      return state;
  }
}

// Action Creators
export function addTodoActionCreator(text: string): AddTodoAction {
  return {
    type: ACTION_TYPE_ADD_TODO,
    text,
  };
}
export function removeTodoActionCreator(): RemoveTodoAction {
  return {
    type: ACTION_TYPE_REMOVE_TODO,
  };
}
export function removeAllActionCreator(): RemoveAllAction {
  return {
    type: ACTION_TYPE_REMOVE_ALL,
  };
}

// 필요한 경우 Side Effects 작성
