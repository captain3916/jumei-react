// // 创建 仓库
// import { createStore, combineReducers } from 'redux';
// import todoReducer from './reducers/todo';
// import cityReducer from './reducers/city';

// // 这个 combineReducers 就是对小 reduer
// const store = createStore(combineReducers({
//   city: cityReducer,
//   todos: todoReducer
// }));

// export default store;


import { createStore, combineReducers } from 'redux';
import userInfo from './reduces/userInfo';

// 2. 调用 createStore 方法返回 一个 仓库的实例对象, 第一个参数需要传递 reudcer
const store = createStore(combineReducers({userInfo}));

export default store;