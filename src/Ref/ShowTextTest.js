import React, {useCallback, useState} from "react";

export default function ShowTextTest() {
    const [text, setText] = useState(INITIAL_TEXT);
    const [showText, setShowText] = useState(true);

    const setInitialText = useCallback(ref => ref && setText(INITIAL_TEXT), []);

    return (
        <div>
            {showText && (
                <input ref={setInitialText}
                       type="text"
                       value={text}
                       onChange={e => setText(e.target.value)}
               />
            )}
            
            <button onClick={() => setShowText(!showText)}>보이기/ 가리기</button>

        </div>
    );
    
}

const INITIAL_TEXT = '안녕안녕';


// input 에 무엇을 입력해도 INITIAL_TEXT만 뜨는 이유는
// 컴포넌트가 렌더링 될때 마다 새로운 함수를, 이 새로운 ref 함수를
// ref={ref => ref && setText(INITIAL_TEXT)} 요부분을
// 입력하고 있기 때문이다.
// 리액트는 ref 속성값으로 새로운 함수가 들어오면 이전 함수에 null 인수를 넣어서 호출함.
// 그리고 새로운 함수에는 요소의 참조값을 넣어서 다시 호출을 함.
// 따라서 문자를 입력할때 계속 컴포넌트가 렌더링이 될텐데,
// 그떄마다 새로운 함수가 입력되면서 INITIAL_TEXT가 계쏙해서 입력되기 때문에
// text가 입력하는 텍스트로 제대로 업테이트가 되지 않는 것이다.
// 이를 해결 하려면 이 함수를 고정할 필요가 있다. (여기서 이함수는 {ref => ref && setText(INITIAL_TEXT)})
// 이럴때는 useCallback 이라는 훅을 사용할 수 있음.

// useCallback의 메모이제이션 기능 덕분에 한번 생성된 이 함수를 계쏙해서
// 재사용 한다는 것만 알아두자!
// 그래서 이 함수는 (setInitialText) 변하지 않는 값이 됨.

// 그래서 이제는 onChange되서 값이 변경될때 ref && setText(INITIAL_TEXT) 함수가 실핼되지 않음.

//메모이제이션이란 계산된 값을 자료구조에 저장하고 이후 같은 계산을 반복하지 않고 자료구조에서 꺼내 재사용하는 것.
// useMemo와 useCallback 은 메모이제이션 기능을 지원하는 리액트 내장 훅으로 퍼포먼스 최적화를 위하여 사용됨.

//HookTest -> 메모이제이션 된 값을 반환
// useCallback -> 메모이제이션 콜백을 반환.

// 리액트는 상태의 변경에 따라 적절한 컴포넌트만 효율적으로 갱신하고 렌더링 된다고 소개하지만,
// 실제로는 상태가 변경되는 컴포넌트와 그 잉하의 모든 자식 컴포넌트가 렌더링 되는 대상이 됨.
// 문제느 ㄴ자식 컴포넌트의 상태가 변경되지 않아도 불필요한 렌더링이 일어남.

// 리액트는 퍼포먼스 최적화를 위해 여러 api 를 제공하고 있으며,
// 이 api를 적절히 사용하면 불피룡한 렌더링을 중이고, 원래 리액트의 소개처럼 효율적인 렌더링이 가능하게 할 수 있음.

