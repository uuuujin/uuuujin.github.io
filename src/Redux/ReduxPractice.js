/*
애플리케이션 전체 상태를 ContextAPI와 useReducer를 이용해서 구현한 내용임.
* */

import React, {createContext, useContext, useReducer} from "react";
import App from "../App";

const AppContext = createContext({});   //애플리케이션의 전체 상태를 내려줌.
const DispatchContext = createContext(() => {});    // 디스패치 함수를 내려줌.

export default function ReduxPractice() {
    //최상위 컴포넌트에서 애플리케이션의 전체 상태값을 관리.
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    //이렇게 최상위 컴포넌트에서 Provider 컴포넌트를 렌더링 함.
    // 그리고 자식 컴포넌트에서 그것을 사용하도록 작성.
    return (
        <div>
            <AppContext.Provider value={state}>
                <DispatchContext.Provider value={dispatch}>
                    <User/>
                    <Product />
                </DispatchContext.Provider>
            </AppContext.Provider>
        </div>
    );
}

const INITIAL_STATE = {
    user : { name : 'mike'},
    product : {name : 'iphone'}
};

//사용자 이름만 변경하도록 작성.
function reducer(state, action) {
    switch (action.type) {
        case 'setUserName' :
            return {
                ...state,
                user: {...state.user, name : action.name},
            };
    }
}

/*dispatch 함수를 이용해서 함수의 이름을 변경하는 코드*/
function User() {
    console.log('User render');
    const { user } = useContext(AppContext);
    const dispatch = useContext(DispatchContext);

    return (
      <div>
          <p>{`${user.name}님 안녕하세요.`}</p>
          <button onClick={() => dispatch({type : 'setUserName', name : 'john'})}>
              사용자 이름 수정
          </button>
      </div>
    );
}

//product 상태값을 사용.
function Product() {
    console.log('Product render');
    const {product} = useContext(AppContext);
    return <p> {`제품이름 : ${product.name}`}</p>;
}

//리액트의 context를 사용했을 때는 렌더링을 효율적으로 적용하는게 조금 까다로움.


// 일단 이 페이지는 redux를 이용한다고 만듬