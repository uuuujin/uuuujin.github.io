import {createStore, combineReducers} from "redux";
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';

const reducer = combineReducers({
    timeline : timelineReducer,
    friend : friendReducer,
});

//const store = createStore(reducer);

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
//optional chaining이라는 문법임.

export default store;

/*

* 2개의 리듀서를 가지고 combineReducers 라는 것을 호출 함.
*
* combineReducers는 리덕스에서 제공하는 함수이고,
* 여거개의 리듀서를 하나로 합치는 역할을 함
* 그래서 하나의 리듀서로 만들었고,
* 그렇게 해서 스토어를 생성함.
*
* */