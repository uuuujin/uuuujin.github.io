import React from "react";

function MyComponent({value1, value2}) {
    console.log("My Component render");

    return (
        <div>
            <p>{`value1 :  ${value1}`}</p>
            <p>{`value2 :  ${value2}`}</p>
        </div>
    )
}

// 무조건 false를 반환하기 때문에 컴포넌트 함수가 실행됨.
// return prevProps.value1 === nextProps.value1;  value1 만 같으면 UI가 같다라고 표현
// isEqual -> true 또는 false를 반환함.
function isEqual(prevProps, nextProps) {
    return prevProps.value1 === nextProps.value1;
}

export default React.memo(MyComponent, isEqual);

// memo 함수를 사용하면 이렇게 속성값 비교 함수를 통해서 컴포넌트 렌더링 과정을 생략할 수 있음.
// 그리고 속성값 비교 함수를 입력하지 안으면,
// 리액트가 기본으로 갖고 있는 함수가 사용이 됨.


//그런데 이전 이후 속성값을 가지고 있을때, 속성값이 변경됐는지 어떻게 판단 할 수 있을까
// 예를 들면 이렇게 속성값 안에 todos라는 객체가 있다고 할때
// 2번째 부분만 low => high로 변경됨.
// 이렇게 변경된 사실은 어떻게 알 수 있을까?
const preProps = {
    todos : [
        {title : 'fix bug', priority : 'high'},
        {title : 'meeting with jone', priority : 'low'},
    ],
    friends : [],
};

const nextProps = {
    todos : [
        {title : 'fix bug', priority : 'high'},
        {title : 'meeting with jone', priority : 'low'},
    ],
    friends : [],
};


// 모든 값을 다 비교 -> 가장 간단하고 무식
/*
preProps.todos[0].title === nextProps.todos[0].title &&
preProps.todos[0].priority === nextProps.todos[0].priority &&
preProps.todos[1].title === nextProps.todos[1].title &&
preProps.todos[1].priority === nextProps.todos[1].priority &&

 딱봐도 성능이 안좋아 보임. */

const isssEquals = preProps.todos === nextProps.todos

/*리액트에서 사용하는 얕은 비교*/
const isEqualsTest = preProps.todos === nextProps.todos && preProps.friends === nextProps.friends;


/*
    한눈에 확인하는 방법 : 객체를 불변 객체로 관리함!!!

* */

const todoos = [1,2,3];
// todoos.push(4); -> 이렇게 추가 하는게 아니라
// 새로운 객체를 생성해서 만드는 것.
const nextTodoos = [...todoos, 4]; // -> 이런 식으로
// 이렇게 추가하면

//prevTodoos === nextTodoos //-> 이렇게만 비교하면 이전/ 이후 값이 변경되었는지 바로 알 수 있음.