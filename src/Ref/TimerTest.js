import React, {useEffect, useRef} from "react";

export default function TimerTest(){
    const timerIdRef = useRef(-1);

    useEffect(() => {
        timerIdRef.current = setTimeout(() => {}, 1000);
    });

    useEffect(() => {
        if ( timerIdRef.current >= 0 ) {
            clearTimeout(timerIdRef.current);
        }
    });
}

// ref 객체는 꼭 돔요소를 참조할때만 사용할 수 있는건 아님.
// setTimeout 이 반환하는 그 ID 값을 저장 이것을 다른곳에서 clear 할때 사용할 수 있음.
// 여기서 timerId 라는 것은 사실 UI 데이터는 아님.
// 그냥 로직을 처리하기 위해 필요한 데이터
// 이렇게 렌더링과 상관없는 값을 저장할 때
// useRef 가 유용하게 사용될수 있다.

// 이런 timerId 값을 useState로 관리 할 수도 있음.
// 하지만 적합하지 않음.

// useState를 사용했을때는 timerId가 변경 됐을떄 디시 렌더링이 됨.
// 하지만 ui 데이터가 아니기 때문에 렌더링 결과는 똑같음.
// 그래서 불필요하게 렌더링만 발생 됨.

// 그래서 ref 객체가 더 적합한 상황.
