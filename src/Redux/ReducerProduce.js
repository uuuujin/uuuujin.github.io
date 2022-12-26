import React from "react";
import produce from 'immer';

const prevState = {
    user : {
        name : 'mike',
        friends : [
            {
                name : 'IU',
                age : 23,
            },
            {
                name : 'tayler Swift',
                age : 22
            }
        ],
    },
    products : []
};

const nextState = produce(prevState, draft => {
   draft.user.friends[0].age = 32;
});

console.log('prevState === nextState', prevState === nextState);

console.log(
    'prevState.user.friends[0] === nextState.user.friends[0]',
    prevState.user.friends[0] === nextState.user.friends[0]
);

console.log(
    'prevState.user.friends[1] === nextState.user.friends[1]',
    prevState.user.friends[1] === nextState.user.friends[1]
);

console.log(
    'prevState.products === nextState.products',
    prevState.products === nextState.products
);

export default function exam() {
    return <div>produce 테스트</div>;
}
/*
* immer를 사용하게 되면 상태값을 수정하는 로직을
* 이렇게 간편하게 작성할 수 있다.
*
*
* */