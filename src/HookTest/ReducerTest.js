import React, {useReducer} from "react";

export default function ReducerTest () {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <div>
            <p>{`name is ${state.name}`}</p>
            <p>{`age is ${state.age}`}</p>

            <input
                type="text"
                value={state.name}
                onChange={e =>
                    dispatch( { type: 'setName', name: e.currentTarget.value})
                }
            />

            <input
                type="number"
                value={state.age}
                onChange={e =>
                    dispatch(   {type: 'setAge', age: e.currentTarget.value})
                }
            />
        </div>
    );
}

const INITIAL_STATE = {name : 'empty', age:0};
const MAX_AGE = 100;

function reducer (state, action) {
    switch (action.type) {
        case 'setName' :
            return { ...state, name : action.name};
        case 'setAge' :
            if (action.age > MAX_AGE) {
                return { ...state, age : MAX_AGE};
            } else {
                return { ...state, age : action.age};
            }
        default :
            return state;
    }
}

/*
* useReducer의 반환 되는 값을 먼저 살펴 보면,
* 상태값이 반환되고 그리고 useState 처럼
* 상태값을 변경할 수 있는 dispatch 함수가 반환됨.
* 매개변수는 reducer()라는 함수를 입력.
* 그리고 초깃값은 INITIAL_STATE 이렇게 입력.
*
* reducer 함수는 state => 현재 상태 값과 action 이 입력되고
* action을 보고 상태값을 어떻게 변경할지,
* 내부 함수에서 판단을 하고 있음.
* dispatch(   {type: 'setAge', age: e.currentTarget.value})
* dispatch 를 입력하고 뒤에 객체 형식으로 입력하명
* 이 값이 reducer 함수의 action으로 들어옴.
* 
* 
* 보통 리액트로 코딩할때 상위 컴포넌트에서 다수의 상태값을 관리
* 이때 자식 컴포넌트로부터 발생한 이벤트에서 상위 컴포넌트의 상태값을 변경해야 하는 경우가 많음.
*
* 이를 위해서 상위 컴포넌트에서 트리의 깊은 곳까지 이벤트 처리 함수를 전달하기도 함.
* 이런 작업은 상당히 손이 많이 가고 코도의 가독성도 떨어뜨림.
*
* 그래서 useReducer Hook과 Context api 를 같이 이용하면
* 상위 컴포넌트에서 트리의 깊은 곳으로 이벤트 처리 함수를 쉽게 전달 할 수 있음.
* */