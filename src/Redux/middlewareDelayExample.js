import {applyMiddleware, createStore} from "redux";

const delayAction = store => next => action => {
    const delay = action.meta?.delay;

    if (!delay) {
        return next(action);
    }

    const timeoutId = setTimeout(() => next(action), delay);

    return function cancle() {
        clearTimeout(timeoutId);
    }
}
/*
* action.meta?.delay;
* action에 meta에 delay라는 값이 있을때!!
* 라는 뜻임
*
* 만약 없다면 그냥 호출하고 끝
* delay 라는게 있을때는
* setTimeout으로 딜레이를 해줘서 리듀서를 (늦게) 실행하는 그런코드
*
*
*
* const delay = action.meta?.delay;
* 요 물음표 기호는
* optional chaining 이라는 기능으로

*  meta 값이 undefined이면
* 만약 action.meta.delay 상태 였을때 에러가 발생함.
*
* but
* action.meta?.delay
* 이렇게 사용하면 에러가 발생하지 않음.
*
* const delay = action.meta?.delay;
* 이 코드는
* const delay = action.meta && action.meta.delay;
* 이 코드와 정확하게 같은 의미 이다.
*
* 조금더 간편하게 사용 가능 (비교적 최근에 추가된 자바스크립트 표준 스펙임)_
* */


const myReducer = (state = {name : 'uuuujin'}, action) => {
    console.log(`myReducer`);
    if (action.type === 'someAction') {
        return {name : 'uuuujin2'}
    }
    return state;
}

const store = createStore(myReducer, applyMiddleware(delayAction));

const cancle = store.dispatch({type : 'someAction', meta : {delay : 3000}});
cancle();

export default function example() {
    return <div>미들웨어 안에 delay 부분 넣어 봄</div>
}
