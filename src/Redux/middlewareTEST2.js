import React from "react";
import {applyMiddleware, createStore} from "redux";

const middleware1 = store => next => action => {
    console.log('middleware1 start');

    const result = next(action);

    console.log('middleware1 end');

    return result;
}

const middleware2 = store => next => action => {
    console.log('middleware2 start');

    const result = next(action);

    console.log('middleware2 end');

    return result;
}

const myReducer = (state, action) => {
    console.log('myReducer');

    return state;
}

const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));

store.dispatch({type: 'someAction'});

/*
* 여기서는 2개의 미들웨어를 입력해봄
* 그 다음 리듀서를 작성했고,
*
* const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));
* 이렇게 스토어를 생성할때 미들웨어 두개를 입력했음.
*
* 그리고
* store.dispatch({type: 'someAction'});
* 액션을 발생시키는 간단한 코드.
*
* 2개의 미들웨어에서는 특별한 일을 하는건 없고,
* 로그만 출력하고 있음.
*
*
*
* */


export default function sample() {
    return <div> 실전 리액트 미들웨어 2개 테스트</div>
}

/*돌렸을때 console.log 찍은 애들은
*
*
        myReducer
        middleware1 start
        middleware2 start
        myReducer
        middleware2 end
        middleware1 end
*  이렇게 호출됨.
*
* myReducer는 초기에 상태값을 초기화 하기 위해서 미들웨어없이 리듀서만 호출하는 단계가 있는데
* 그것 때문에 출력된 내용임.
* 그 이후에 액션이 발생했을때에는  store.dispatch({type: 'someAction'});
* 요렇게 dispatch를 호출 했을때에는 5개의 로그가 출력 됨
        middleware1 start
        middleware2 start
        myReducer
        middleware2 end
        middleware1 end
*
*  액션이 발생했을때 미들웨어부터 처리 됨.
*  그래서 첫번째 미들웨어가 실행되고,
*  console.log -> middleware1 start
*  실행되고 next를 호출했을땐
*
*  console.log -> middleware2 start
*  요 두번째 middleware2 가 호출이됨.
*
* middleware1에서 next 함수는
* middleware2의 next => action => { 요부분을 의미 함
*
* 그리고 middleware2의 next는 다음 미들웨어가 없기 때문에 리듀서를 말함.
*
* 결론적으로 미들웨어의 순서대로 호출이 되면서 next를 호출하면서
* 다음 미들웨어를 호출하게 되고,
* 마지막 미들웨어에서는 리듀서를 호출함.
* 라고 이해하면 됨.
*
*
*
* */