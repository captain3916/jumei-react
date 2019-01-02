import { createStore, combineReducers } from 'redux';
import userInfo from './reducers/userInfo';

// 2. 调用 createStore 方法返回 一个 仓库的实例对象, 第一个参数需要传递 reudcer
const store = createStore(combineReducers({userInfo}));

export default store;