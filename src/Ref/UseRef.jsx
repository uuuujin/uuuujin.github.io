import React, {useEffect, useRef} from "react";

export default function  UseRef() {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    
    return(
        <div>
            <InputAndSave ref={inputRef} />
            {/*<Button ref={buttonRef} />*/}
            <button onClick={() => inputRef.current.focus()}> 텍스트로 이동</button>
        </div>
    )
}

function InputAndSave( {inputRef}) {
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button> 저장 </button>
        </div>
    );
}

const Button = React.forwardRef (function ({ onClick}, ref) {
    return (
        <button onClick={onClick} ref={ref}>
            저장
        </button>
    );
});

// focus 메서드를 호출하는게 useEffect 내부에서 하고 있다는 것에 주목해야함
// 실제 돔요소는 렌더링 결과가 실제 돔에 반영된 후에 접근할수 있기 때문에
// 부수효과 함수 안에서 접근할수 있는 것이다.
// 이렇게 ref 속성 값은 일반적인 컴포넌트에도 입력 할수 있음.
// useimperativeHandle 훅을 사용하면 함수형 컴포넌트에서도
// 마치 클래스 형 컴포넌트의 멤버 변수가 메서드를 접근하는 것 처럼 함수형 컴포넌트 내부의 변수와 함수를 외부로 노출 시킬수 있음.

