import React, {useEffect, useRef, useState} from "react";

export default function AgeTest() {

    const [age, setAge] = useState(20);

    const preAgeRef = useRef(27); // 이전 age 값을 기억하기 위해서 이렇게 사용.

    useEffect(() => {
        preAgeRef.current = age;
    }, [age]);

    const preAge = preAgeRef.current;

    const text = age === preAge ? 'same' : age > preAge ? 'older' : 'younger';

    return (
        <div>
            <p> {`age ${age} is ${text} than age ${preAge}`}</p>
            <button
                onClick={() => {
                    const age = Math.floor(Math.random() * 50 +1 );
                    setAge(age);
                }}>
                나이 변경
            </button>
        </div>
    );
}

// useEffect 안에서 값을 렌더링 하고 있음.
// useEffect 는 랜더링 된 후에 호출이 됨.
// 그래서 컴포넌트 함수 안에서 이렇게 렌더링 할때는
// preAge는 이전값을 가리키고 있다가 그 이후에 갱신 함.
// 그래서 이전 값을 기반으로 무언가 처리할 수 있음.
