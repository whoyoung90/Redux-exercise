/**
 * action이 객체: sync
 * action이 함수: async
 * next(action) = dispatch(action)
 * */
const asyncThunkMiddleware = (store) => (next) => (action) => {
  // [부가 기능] action이 함수인 경우 (비동기)
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }

  // [기본 기능] action 객체일 경우 (동기)
  return next(action);
};

export default asyncThunkMiddleware;

/**
 * @description 커링 함수
 * 함수 중간중간에 다른 것들을 끼워넣기 위해서!
 * 
 * function asyncThunkMiddleware(store) {
    // 실행되는 시점의 차이 store(Action)

    return function (next) {
      // 실행되는 시점의 차이 next(Action)

      return function (action) {
        // 실행되는 시점의 차이 action
      };
    };
  }
 * 사이사이에 실행할게 없을 때 아래와 같이 적는다
  const asyncThunkMiddleware = (store) => (next) => (action) => {}
*/
