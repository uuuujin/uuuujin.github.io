import React, {useRef} from "react";
import Profile from "./ImperativeHandleTest";

export default function ImperativeHandleApp() {
    const profileRef = useRef();
    const onClick = () => {
        if (profileRef.current) {
            console.log('current name length: ', profileRef.current.getNameLength());
            profileRef.current.addAge(5);
        }
    };

    return (
        <div>
            <Profile ref ={profileRef}/>
            <button onClick={onClick}>add age 5</button>
        </div>
    );
}

/*
* profileRef.current는 자식 ImperativeHandleTest의
*
* useImperativeHandle 안에 있는 addAge, getNameLength -> 에서 반환한 값을 참조함.
*
* 그래서 자식에서 제공해준 2가지 함수를 사용할 수 있게 됨.
*
* 여기서 핵심음 부모 컴포넌트에서 자식 컴포넌트의 함수를 호출 할 수 있는 부분이닷~~~~
*
*
*
* */