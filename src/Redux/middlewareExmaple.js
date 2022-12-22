
/*
* store.getState() -> 스토어의 상태값을 가져오기 위해 사용하고 있음.
*
* 상태값 호출 후 next 호출 후 또 상태값 호출 하고 있음.
*
* next(action);을 호출했을 때는 최종적으로 리듀서가 호출 되기 때문에,
* 리듀서에서 상태값을 변경함
*
* 그래서 상태값 변경전에 한번 콘솔로그 찍고, 상태값 변경 후에 콘솔로구 찍으니까
* 변경 점을 확인 할 수 있음.
* 
*
* */
import {applyMiddleware, createStore} from "redux";

const printLog = store => next => action => {
    console.log(`prev state = ${JSON.stringify(store.getState())}`);

    const result = next(action);

    console.log(`next state = ${JSON.stringify(store.getState())}`);

    return result;
}

const myReducer = (state = {name : 'uuuujin'}, action) => {
    console.log(`myReducer`);
    if (action.type === 'someAction') {
        return {name : 'uuuujin2'}
    }
    return state;
}

const store = createStore(myReducer, applyMiddleware(printLog));

store.dispatch({type : 'someAction'});

export default function example() {
    return <div>미들웨어 샘플 상태값 변경 전 후 콘솔 로그 찍어보기</div>
}
