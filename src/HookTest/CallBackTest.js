import React, {useCallback, useState} from "react";

export default function CallBackTest() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [v1, setV1] = useState(0);

    const onSave = useCallback(() => saveToServer(name, age), [name, age]);

    return (
        <div>
            <p> {`name is ${name}`}</p>
            <p> {`age is ${age}`}</p>
            <UserEdit
                //onSave={() => saveToServer(name, age)}
                onSave = {onSave}
                setName={setName}
                setAge={setAge}
            />
            <p>{`v1 : ${v1}`}</p>
            <button onClick={() => setV1(Math.random())}>
                 v1 수정
            </button>
        </div>
    );
}

const UserEdit = React.memo(function ({onSave, setName, setAge}) {
    console.log("UserEdit render");
    return null;
});

function saveToServer(name, age) {
}

// useCallback 훅도 메모이제이션 기능을 이용하는데
// 함수 메모이제이션에 특화된 훅이라고 생각할수 있음.
// onSave event에 속성값으로 전달할때는, 
// 해당 컨포넌트가 렌더링 될때 마다,
// 새로운 함수가 생성되서 입력이 됨.
// 이러면 이 컴포넌트가 렌더링 될때마다, 매번 onSave의 속성값이 변경되기 때문에
// UserEdit 입장에서는 이 함수의 내용이 밴경되지 않았음에도
// (onSave, ....) 새로운 속성값을 입력 받게 됨.
// 그래서 불필요하게 렌더링이 발생
// 이럴때 useCallback 훅을 사용하면 이런 문제를 해결 할 수 있음.

// useCallback도 의존성 배열로 관리함.
// 여기서는 name이랑 age가 변경될때만 새로운 함수가 생성되도록 작성.