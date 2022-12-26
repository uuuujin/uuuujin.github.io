import React from "react";
import produce from "immer";

function reducer(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case SET_SELECTED_PEOPLE :
                // draft.selectedPeople = draft.peopleList.find(
                //     item => item.id === action.id,
                // ); -> 이렇게 레퍼런스가 아니라 고유한 id 값을 이용하는게 좋음
                draft.selectedPeople = draft.peopleList.find(
                    item => item.id === action.id,
                );
                break;
            case EDIT_PEOPLE_NAME :
                const people = draft.peopleList.find(item => item.id === action.id);
                people.name = action.name;
                break;
        }
    });
}

export default function reducerTest2() {
    return (
        <div>reducer test </div>
    );
}

/*
* 리듀서 코드를 작성할때 주의 해야 할 사항
* SET_SELECTED_PEOPLE 이라는 액션에서,
* peopleList 에 있는 아이템을 하나 가져와서 selectedPeople에 저장 함.
*
* EDIT_PEOPLE_NAME 에서는 마찬가지로 배열에서 아이템 하나를 가져와서 name을 수정함.
* 이렇게 name을 수정할때는 people객체가 새로 만들어지는데,
*
* 이때 문제가 될수 있는 건
* selectedPeople 에서 참조 하고 있는 객체의 이름을 여기서(people.name = action.name;) 수정을 했을 때
* 객체가 새로 만들어 졌지만 selectedPeople은 예전의 객체 레퍼런스를 들고 있기 때문에
* name은 변경 되지 않은 채로 예전 값을 참조 하게 됨.
*
*
* 이렇게 객체를 가리킬때는 객체의 레퍼런스가 아니라
* 고유한 id 값을 이용하는게 좋음.
*
** 리듀서 코드를 작성할때 주의 해야 할 사항
* Reducer는 순수함수로 작성해야함
* 순수함수로 작성하려면 부수효과가 없어야 함.
* 부수효과 = 외부상태를 변경하는 것
* 서버 api를 호출하는 것도 부수효과 중 하나다.
* 그래서 서버 api를 리듀서에서 호출하면 안됨.
*
* 그리고 순수함수가 되려면 입력이 같을때 같은 출력을 줘야함.
*
* */