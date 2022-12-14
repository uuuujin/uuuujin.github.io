import React, {forwardRef, useImperativeHandle, useState} from "react";

function ImperativeHandleTestProfile(_, ref) { //Profile 컴포넌트는 속성값은 사용하지 않고  ref 속성값만 사용함.
    const [name, setName] = useState('mike');
    const [age, setAge] = useState(0);

    useImperativeHandle(ref, () => ({
        addAge: value=> setAge(age + value),
        getNameLength: () => name.length,
    }));

    return (
        <div>
            <p>{`name is ${name}`}</p>
            <p>{`age is ${age}`}</p>
        </div>
    )

}

export default forwardRef(ImperativeHandleTestProfile);

// ref 속성 값을 받아서 useImperativeHandle 의 첫번째 매개변수로 입력을 하고 있음.
// useImpretive의 2번재 매개변수로 함수를 입력하고 있음
/* () => ({
        addAge: value=> setAge(age + value),
        getNameLength: () => name.length,
    }));
    => 여기 부분
    이 함수의 반환 값이 이부모의 ref 객체가 참조하는 값이 됨. -> 이해 x....

    그리고 이렇게 ref 속성 값을 받기 위해서 forwardRef 함수를 사용함.
*
*
*
* */