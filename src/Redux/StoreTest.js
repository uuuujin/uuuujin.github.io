import {createStore} from "redux";
import {createReducer} from "./redux-helper";

const INITIAL_STATE = {value : 0};
const reducer = createReducer(INITIAL_STATE, {
    INCREMENT : state => (state.value += 1),
});

const store = createStore(reducer);

let preState;
store.subscribe(() => {
    const state = store.getState();
    if (state === preState) {
        console.log('상태값 같음');
    } else {
        console.log('상태값 변경 됨');
    }
    preState = state;
});

store.dispatch({type : 'INCREMENT'});
store.dispatch({type : 'OTHER_ACTION'});
store.dispatch({type : 'INCREMENT'});


/*
* 스토어를 사용할때는
* createStore 라는 함수를 이용한다.
*
* 여기에 리듀서를 넣어서 호출해주면
* 스토어가 생성됨.
*
* 스토어는 상태값을 저장하는 역할도 있고,
* 그리고 액션 처리가 끝났다는 것을 외부에 알려주는 역할도 함.
* 그 액션 처리가 끝났다는 이벤트를 받기 위해서는
* 스토어의 subscribe 메서드를 호출해서 위와 같이 함수를 입력하면 됨.
* 그러면 이렇게 store.dispatch({type : 'INCREMENT'}); 액션을 발생 시켰을 때
* 각 액션에 대한 처리가 끝나면 subscribe 함수가 호출 됨.
*
* subscribe 에서는 이전 상태값을 저장하고,
* 새로 생성된것을 이전과 비교해서 같은지 변경됐는지 로그로 출력해주는 간단한 코드.
*
*
* # 실행하면
* 상태값 변경 됨
* 상태값 같음
* 상태값 변경 됨
* INCREMENT를 했을때는 value를 증가 시켰기 때문에 상태값이 변경됨.
* OTHER_ACTION은 아무것도 안하기 때문에 상태값이 같을거고
* 또 INCREMENT해서 '변경됨'이 출력 됨.
*

* */

export default function StoreTest() {
    return <div> 스토어 테스트 </div>;
};