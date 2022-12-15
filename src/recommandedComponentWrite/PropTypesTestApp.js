import React, {useState} from "react";
import User from "./PropTypesTest";

export default function PropTypesTestApp() {
    return (
        <div>
            <User onChangeTitle={() => {}} male={true} type={'gold'} age={12}/>
        </div>
    )
}

// && (and) 연산자 에서는 처음으로 거짓을 만나거나 아니면 끝까지 이동할때까지 평가를 하게됨
// 'ab' && 0 => 'ab' 참이기 때문에 다음으로 넘어가고
// 0인 거짓을 만나서 마지막으로 평가된 값이 v1이 됨 그래서 v1 = 0;
const v1 = 'ab' && 0 && 2;  // v1 === 0
const v2 = 'ab' && 2 && 3;  // v2 === 3

// || (or) 연산자는 반대로 처음으로 참을 만날때 까지만 평가 함.
const v3 = 'ab' || 0;       // v3 === 'ab'
const v4 = '' || 0 || 3;    // v4 === 3


function Greeting({ isLogin, name, cash}) {
    return (
        <div>
            저희 사이트에 방문해주셔서 갑사합니다.
            {/*로그인이 isLogin=> false 일때는 {false} 이렇게 적는것과 같은 효과
            리액트에서는 false뿐만 아니라 null 같은 겻도 무시됨.*/}
            {isLogin && (
                <div>
                    <p> {name} 님 안녕하세요.</p>
                    <p> 현재 보유하신 금액은 {cash} 원 입니다.</p>
                </div>
            )}
        </div>
    )
}


/*상항연산자를 3번 사용함.
* ui 요소는 2 부분*/
function Greeting2( {isEvent, isLogin, name, cash}) {
    return (
        <div>
            저희 사이트에 방문해 주셔서 감사합니다.
            {isEvent ? (
                <div>
                    <p>오늘의 이벤트를 놓치지 마세요.</p>
                    <button onClick={onClickEvent}>이벤트 참여하기</button>
                </div>
            ) : isLogin ? (
                cash <= 100000 ? (
                    <div>
                        <p>{name}님 안녕하세요.</p>
                        <p>현재 보유하신 금액은 {cash} 원 입니다.</p>
                    </div>
                ) : null
            ) : null}
        </div>
    )
}

/*위에 Greeting2를 and 절로 표현하면 조건이 한눈에 들어옴.
* */
function Greeting2Better( {isEvent, isLogin, name, cash}) {
    return (
        <div>
            저희 사이트에 방문해 주셔서 감사합니다.
            {isEvent && (
                <div>
                    <p>오늘의 이벤트를 놓치지 마세요.</p>
                    <button onClick={onClickEvent}>이벤트 참여하기</button>
                </div>
            )}
            {!isEvent && isLogin && cash <= 100000 && (
                <div>
                    <p>{name}님 안녕하세요.</p>
                    <p>현재 보유하신 금액은 {cash} 원 입니다.</p>
                </div>
            )}
        </div>
    )
}

/* 이렇게 and 연산자로 조건부 렌더링을 할때 주의할 점은
 {cash && <p>{cash}원 보유중</p>} -> 이때
*  cash는 number 타입, cash가 0인경우
* {0}만 나올수 있음.

 이렇때는 명확하게 불리언 타입으로 boolean 변환 해줘야함
 {!!cash && <p>{cash}원 보유중</p>}
 앞에 not을 두번 붙임

 메모도 마찬가지로,
 {memo && <p>{200 - memo.length}자 입력 가능</p>}
 -> 메모가 빈 문자열일때 {''} 이렇게 빈 문자열만 출력 됨.
    메모가 빈 문자열이더라도 200 - 0 으로 -> 200자 입력가능 이라고 나오게 하고 싶을수 있음.
    그럴땐 하단 처럼
  */
function sampleFunc({cash, memo}) {
    return (
        <div>
            {cash && <p>{cash}원 보유중</p>}
            {!!cash && <p>{cash}원 보유중</p>}
            {memo && <p>{200 - memo.length}자 입력 가능</p>}
        </div>
    )
}

/*cash나 memo가 null이나 undefined가 아니라고 명확하게 표현해야함.*/
function sampleFuncBetter({cash, memo}) {
    return (
        <div>
            {cash != null && <p>{cash}원 보유중</p>}
            {memo != null && <p>{200 - memo.length}자 입력 가능</p>}

        </div>
    )
}

// && : 처음으로 거짓을 만나거나, 거짓을 만나지 않았으면 끝까지 이동.
// || : 처음으로 참을 만날때까지 이동.





/*이 부분은 Parent 컴포넌트에서 Child 컴포넌트를 렌더링 하고있음.
* Child 에서는 user 데이터가 앖을때,
* null을 반환하고 있음.
* 이렇게 데이터가 없을때 null을 반환하는 부분을 자주 사용하는데 
* 다르게 작성할 수도 있음.*/
function Parent({user}) {
    return (
        <div>
            <p>Parent</p>
            <Child user={user}/>
        </div>
    )
}

function Child({user}) {
    const [v, setV] = useState(0);
    if (user) {
        return null;
    }
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.phone}</p>
        </div>
    )
}

/*아니면 부모쪽에서 먼저 검사해줄수 있음.
* BUT!!!
* 이렇게 작성하면 주의사항
* user 데이터의 상태에 따라
* Child 컴포넌트가 언마운트와 마운트를 반복 할 수 있음.
* 그것이 의도적이라면 상관이 없으나,
* 의도 하지 않고 사용하다보면 v 상태값이 초기화 되어 문제가 될 수 있음.
* (언마운트 되면 상태값이 사라지기 때문)
* 이렇게 조건부 렌더링의 방식은 다양하기 때문에
* 각자의 취향과 프로젝트 성격에 따라 코딩컨벤션을 잘 정해야 함.*/
function ParentBetter({user}) {
    return (
        <div>
            <p>Parent</p>
            {user && <Child user={user}/>}
        </div>
    )
}

function ChildBetter ({user}){
    const [v, setV] = useState(0);
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.phone}</p>
        </div>
    )
}