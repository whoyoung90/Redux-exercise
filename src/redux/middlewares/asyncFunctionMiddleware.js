const asyncFunctionMiddleware = (store) => (next) => (action) => {
  // action이 함수일 경우
  if (typeof action === "function") {
    // dispatch와 getState를 파라미터로 하여 action 함수를 호출
    return action(store.dispatch, store.getState);
  }

  // 일반적인 action 객체일 경우, 원래대로 처리
  return next(action);
};

export default asyncFunctionMiddleware;
