import React from "react";
import produce from "immer";

/*
리듀서에 대해서 알아보자!!!
 리듀서는 액션이 발생했을 때
 새로운 상태값을 만드는 함수이다.
 리덕스의 상태값을 수정하는 유일한 방법은
 액션객체와 함께 dispatch 메서드를 호출하는 것이다.

 다른 어떤 방법으로도 상태값을 수정하면 안됨.

 상태값은 dispatch 메서드가 호출된 순서대로
 리덕스 내부에서 변경되기 때문에
 상태값이 변화 되는 과정을 쉽게 이해 할수 있음.

 그리고 상태값은 불변 객체로 관리해야함.
* */

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REMOVE_ALL:
            return {
                ...state,
                todos: [],
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo=> todo.id !== action.id),
            };
        default :
            return state;
    }
}

const INITIAL_STATE = {todos : [], };

/*
 리덕스가 처음에 실행이 될때
 state에 undefined를 넣어서 리듀서를 호출함.

 이때 초기값을 셋팅하면 되는데
 여기서는 INITIAL_STATE를 넣어줌.

 두번째 매개변수는 action 객체가 넘어옴.
 액션 객체의 type에 따라서 해당하는 액션에 대한 처리를 해주면 됨.
 
 위의 소스에서는
 todos를 모두 지우거나 하나의 todos를 지우는 액션이 있음.

 객체를 불변객체로 관리하기 위해는 조금 번거롭긴함
 그럴때 사용하는 라이브러리가 있음.
 produce

 */

// 위에 리듀서를 createReducer를 사용해서 이렇게 간단하게 사용 할 수 있음.
const reducerBetter = createReducer(INITIAL_STATE, {
   [ADD] : (state, action) => state.todos.push(action.todo),
   [REMOVE_ALL] : state => (state.todos = []),
   [REMOVE] : (state, action) =>
       (state.todos = state.todos.filter((todo => todo.id !== action.id))),
});

function createReducer(initialState, handlerMap) {
    return function  (state = initialState, action) {
        return produce(state, draft => {
            const handler = handlerMap[action.type];
            if (handler) {
                handler(draft, action);
            }
        })
    }
}
/*
* reducer 안쪽을 produce로 감쌌었음.
* 그거랑 똑같이 작성
* */