import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // useEffect(() => {
    //    console.log("======================");
    //    console.log("useEffect() is called.");
    //    console.log(`isFull: ${isFull}`);
    // });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);

        console.log(`Current count value : ${count}`);
    }, [count]);

    return (
        <div style={{padding : 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            
            <button onClick={increaseCount} disabled={isFull}>
                입장 {count}
            </button>
            <button onClick={decreaseCount} disabled={count === 0}>
                퇴장
            </button>

            {isFull && <p style={{color: "red"} }>정원이 가득 찼습니다.</p>}
        </div>
    )
}

export default Accommodate;


/*
* 의존성 배열이 없는 useEffect는 컴포넌트가 마운트된 직 후에 호출 되며,
* 이후 컴포넌트가 update될때마다 호출 됨.
* 
* 의존성 배열이 있는 useEffect 훅은 컴포넌트가 마운트된 직 후에 호출 되며,
* 이후 count 값이 바뀔때마다 호출되는데,
* 이때 용량이 가득 찼는지 아닌지의 상태를 isFull이라는 state에 저장함.
*
*
* useCount 함수에서 Math.max 함수를 사용하여 0이하로 내려갈수 없게 해 놨기 때문에
* 값이 0이 되면 더이상 useEffect 함수도 호출 되지 않음.
* */