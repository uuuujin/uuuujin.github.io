import React from "react";
import produce from "immer";

function reducer (state = INITIAL_STATE, action) {
    return produce (state, draft  => {
        switch (action.type) {
            case SAY_HELLO :
                const random = Math.floor(Math.random() * 10 + 1);
                draft.msg = `안녕하세요 ${action.name}님의 행운의 숫자는 ${random}입니다.`;
                break;
            case INCREMENT :
                callApi({url : '/sendActionLog', data: action});
                draft.value += 1;
                break;
        }
    });
}

/*
** 리듀서 코드를 작성할때 주의 해야 할 사항
* Reducer는 순수함수로 작성해야함
* 순수함수로 작성하려면 부수효과가 없어야 함.
* 부수효과 = 외부상태를 변경하는 것
* 서버 api를 호출하는 것도 부수효과 중 하나다.
* 그래서 서버 api를 리듀서에서 호출하면 안됨.
*
* 그리고 순수함수가 되려면 입력이 같을때 같은 출력을 줘야함.
*
* 그런데 여기서 random을 사용해서 상태값을 만들면 입력이 같아도 출력이 다를수 있기 때문에
* random 함수를 쓰면 안됨.
*
* 타임 함수도 마찬가지로 사용하지 않는게 좋음.
*
*  random 값이 필요하다면 액션 객체를 만들때, 그때 random 을 호출해서 데이터를 만들어서 넣어주면 됨.
* 그러면 이 안에서 그 랜덤 값을 활용하면 됨.
*
*
* */
