import React, {useMemo, useState} from "react";

export default function MemoTest() {
    const [v1, setV1] = useState(0);
    const [v2, setV2] = useState(0);
    const [v3, setV3] = useState(0);

    const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]);

     return (
         <>
         <p>
             {`value is ${value}`}
         </p>
         <button
             onClick={() => {
                 setV1(Math.random());
                 setV2(Math.random());
             }}
             >
             v1/v2 수정
         </button>
        <p>
            {`v3 is ${v3}`}
        </p>
        <button onClick={() => setV3(Math.random())}>
            v3 수정
        </button>
     </>
     );
}

/*이 함수가 복잡한 코드라고 가정함.*/
function runExpensiveJob(v1, v2) {
    console.log('runExpensiveJob is called');

    return v1 + v2;
}

// HookTest 훅의 첫번재 매개 변수로 함수를 입력 함.
// 그러면 그 함수가 실행된 결과값을 react가 기억함.
// runExpensiveJob은 뒤에 배열 값이 하나라도 변경되면 실행함.
// 만약 값이 변경되지 않았다면 이전에 실행해서 저장했던 값을 재활용 함.
// useEffect 와 마찬가지로 두번째 배열을 의존성 배열이다.
// button은 click 하면 v1, v2 값을 수정 -> 그렇게 되면 의존성 배열이 변경됐기 때문에
// runExpensiveJob 함수가 실행이 됨.


